#include "armstrong_numbers.h"
#include "stdio.h"

int digits(int n);
int power(int base, int n);
bool is_armstrong_number(int candidate);

int digits(int n) {
  int sum = 0;
  while (n != 0) {
    n /= 10;
    ++sum;
  }
  return sum;
}

int power(int base, int n) {
  int res = 1;
  for (int i = 0; i < n; i++) {
    res *= base;
  }
  return res;
}

bool is_armstrong_number(int candidate) {
  int n_digits = digits(candidate);
  int sum = 0;
  for (int i = candidate; i != 0; i /= 10) {
    int num = i % 10;
    sum += power(num, n_digits);
  }
  return sum == candidate;
}
