/*
 * HachMapTest.cpp
 *
 *  Created on: Nov 24, 2016
 *      Author: e11438
 */

#include "HashMap.cpp"
#include<iostream>

using namespace std;

int main(){

	cout<<"In main method.\n";


	HashMap<int, string> hmap;

	hmap.put(1, "val1");
	hmap.put(2, "val2");
	hmap.put(3, "val3");

	string value;
	hmap.get(2, value);
	cout << value << endl;
	bool res = hmap.get(3, value);
	if (res)
	    cout << value << endl;
	hmap.remove(3);
	res = hmap.get(3, value);
	if (res)
	    cout << value << endl;

	return 0;
}


