#include <iostream>
#include <string>

// Checks whether the binary string has a number of 1s divisible by 4
// This reflects the doubly-even property in certain self-dual codes
bool isDoublyEven(const std::string& bits) {
    int count = 0;
    for (char c : bits) {
        if (c == '1') count++;
    }
    return count % 4 == 0;
}

// Adds the minimal number of '1' parity bits needed to make the string doubly-even
// This mirrors the logic in string theory's use of doubly-even self-dual codes
std::pair<std::string, int> addParityBits(const std::string& bits) {
    int ones = 0;
    for (char c : bits) {
        if (c == '1') ones++;
    }
    int needed = (4 - (ones % 4)) % 4;
    return { bits + std::string(needed, '1'), needed };
}

int main() {
    std::string input;
    std::cout << "Enter binary string: ";
    std::cin >> input;

    // Validate input: must only contain '0' or '1'
    for (char c : input) {
        if (c != '0' && c != '1') {
            std::cout << "Invalid input: only 0 and 1 are allowed.\n";
            return 1;
        }
    }

    auto [fixed, parityBits] = addParityBits(input);
    bool valid = isDoublyEven(fixed);

    std::cout << "Original:     " << input << "\n";
    std::cout << "With parity:  " << fixed << "\n";
    std::cout << (valid ? "✅ Doubly-even (valid)\n" : "❌ Not doubly-even\n");

    if (parityBits > 0) {
        std::cout << "(" << parityBits << " parity bit" 
                  << (parityBits > 1 ? "s" : "") << " added)\n";
    }

    return 0;
}