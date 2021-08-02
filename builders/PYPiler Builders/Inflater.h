#define _BASE64_H_

#include <vector>
#include <string>

#pragma once
class Inflate {
public: int init() {
	typedef unsigned char BYTE;

	std::string base64_encode(BYTE const* buf, unsigned int bufLen);
	std::vector<BYTE> base64_decode(std::string const&);
}
};

