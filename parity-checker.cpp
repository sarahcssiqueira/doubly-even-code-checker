#include <iostream>
#include <string>

bool isDoublyEven(const std::string& bits) {
    int count = 0;
    for (char c : bits) {
        if (c == '1') count++;
    }
    return count % 4 == 0;
}

std::string addParityBits(const std::string& bits) {
    int ones = 0;
    for (char c : bits) {
        if (c == '1') ones++;
    }
    int needed = (4 - (ones % 4)) % 4;
    return bits + std::string(needed, '1');
}

int main() {
    std::string input;
    std::cout << "Enter binary string: ";
    std::cin >> input;

    // Validate input
    for (char c : input) {
        if (c != '0' && c != '1') {
            std::cout << "Invalid input: only 0 and 1 are allowed.\n";
            return 1;
        }
    }

    std::string encoded = addParityBits(input);
    bool valid = isDoublyEven(encoded);

    std::cout << "Original:     " << input << "\n";
    std::cout << "With parity:  " << encoded << "\n";
    std::cout << (valid ? "✅ Doubly-even (valid)\n" : "❌ Not doubly-even\n");

    return 0;
}