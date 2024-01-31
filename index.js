sentence = "The quick brown fox jumps over the lazy dog."

# Initialize counters
charCount = 0
wordCount = 0
vowelCount = 0

# Iterate through each character in the sentence
for char in sentence:
    charCount += 1  # Increment character count

    # Check if the character is a letter (assuming English alphabet)
    if char.isalpha():
        # Increment word count when a space is encountered
        if char == ' ':
            wordCount += 1