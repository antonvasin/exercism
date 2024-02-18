#include "armstrong_numbers.h"
#include <math.h>

bool is_armstrong_number(int candidate);

bool is_armstrong_number(int candidate) {
  if (candidate < 10)
    return true;

  int sum = 0;
  int n_digits = log10(candidate) + 1;
  int num = candidate;
  while (num > 0)
  {
    int n = num % 10;
    int acc = 1;
    for (int i = 0; i < n_digits; i++)
      acc *= n;
    sum += acc;
    num /= 10;
  }
  return candidate == sum;
}
