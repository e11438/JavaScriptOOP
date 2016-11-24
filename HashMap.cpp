/*
 * HashMap.cpp
 *
 *  Created on: Nov 24, 2016
 *      Author: e11438
 */
#include<iostream>
#include "HashNode.cpp"
#include<stdlib.h>
// Hash map class template
template <typename K, typename V>
class HashMap {
public:
    HashMap() {
        // construct zero initialized hash table of size
        table = new HashNode<K, V> *[100]();
    }

    ~HashMap() {
        // destroy all buckets one by one
    	std::cout<<"Destroying Hash Map\n";
        for (int i = 0; i < 100; ++i) {
            HashNode<K, V> *entry = table[i];
            while (entry != NULL) {
                HashNode<K, V> *prev = entry;
                entry = entry->getNext();
                delete prev;
            }
            table[i] = NULL;
        }
        // destroy the hash table
        delete [] table;
    }

    bool get(const K &key, V &value) {
        unsigned long hashValue = hashFunc(key);
        HashNode<K, V> *entry = table[hashValue];

        while (entry != NULL) {
            if (entry->getKey() == key) {
                value = entry->getValue();
                return true;
            }
            entry = entry->getNext();
        }
        return false;
    }

    void put(const K &key, const V &value) {
        unsigned long hashValue = hashFunc(key);
        HashNode<K, V> *prev = NULL;
        HashNode<K, V> *entry = table[hashValue];

        while (entry != NULL && entry->getKey() != key) {
            prev = entry;
            entry = entry->getNext();
        }

        if (entry == NULL) {
            entry = new HashNode<K, V>(key, value);
            if (prev == NULL) {
                // insert as first bucket
                table[hashValue] = entry;
            } else {
                prev->setNext(entry);
            }
        } else {
            // just update the value
            entry->setValue(value);
        }
    }

    void remove(const K &key) {
        unsigned long hashValue = hashFunc(key);
        HashNode<K, V> *prev = NULL;
        HashNode<K, V> *entry = table[hashValue];

        while (entry != NULL && entry->getKey() != key) {
            prev = entry;
            entry = entry->getNext();
        }

        if (entry == NULL) {
            // key not found
            return;
        }
        else {
            if (prev == NULL) {
                // remove first bucket of the list
                table[hashValue] = entry->getNext();
            } else {
                prev->setNext(entry->getNext());
            }
            delete entry;
        }
    }

private:
    // hash table
    /*Hash functions
     * http://www.cse.yorku.ca/~oz/hash.html
     *
     * reducing the value to the correct range using bit mask -127
     * */
    HashNode<K, V> **table;
    unsigned long hashFunc(string str)
    {
    	unsigned long hash = 5381;
        int c;
        for(int i=0;i<str.size();i++){
            c=str.at(i);
            hash = ((hash << 5) + hash) + c; /* hash * 33 + c */
        }
        return hash;
    }
    unsigned long hashFunc(k str)
        {

        	unsigned long hash = 5381;
            int c;
            for(int i=0;i<str.size();i++){
                c=str.at(i);
                hash = ((hash << 5) + hash) + c; /* hash * 33 + c */
            }
            return hash;
        }
};




