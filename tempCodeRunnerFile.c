#include <stdio.h>
#include <stdlib.h>

int main() {
    // Set UTF-8 encoding (Windows-specific; skip for Linux/macOS)
    #ifdef _WIN32
    system("chcp 65001");
    #endif

    // Print emojis using Unicode escape sequences
    printf("Hello, World! 😀 🌟 🎉\n");

    // Alternatively, directly use UTF-8 encoded emojis
    printf("This is a smiley: 😊\n");

    return 0;
}
