# Deno Kata Addition of fractions

Write a program that implements the addition of fractions. Fractions must be reduced. An implementation of the greatest common divisor (GCD) is provided:

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
Examples:

1/2 + 1/3 = 5/6
1/4 + 1/4 = 1/2

(1*2)/(2*2) + 1/4 = 2/4 + 1/4 


## Tech Stack

- **Deno**: Modern and secure TypeScript/JavaScript runtime
- **Vitest**: Fast and modern testing framework
- **TypeScript**: Statically typed language

## Prerequisites

- [Deno](https://deno.land/) installed on your machine

## Usage

### Run tests

```bash
deno task test
```

This command runs Vitest in watch mode. Tests automatically re-run on every file change.




