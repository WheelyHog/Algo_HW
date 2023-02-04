function tower(n, src, dest, temp) {
  if (n == 0) {
    return
  } else {
    tower(n - 1, src, temp, dest);
    console.log(src + " -> " + dest);
    tower(n - 1, temp, dest, src);
  }
}
tower(20, 1, 2, 3);

