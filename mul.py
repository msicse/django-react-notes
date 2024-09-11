def add_numbers(a, b):
    """Function to add two numbers."""
    return a + b

# Taking input from the user
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

# Calling the function and storing the result
result = add_numbers(num1, num2)

# Displaying the sum
print(f'The sum of {num1} and {num2} is {result}')
