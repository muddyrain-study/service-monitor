var fn = function fn() {
  console.log("Hello World");
  return [1, 2, 3].map(function (n) {
    return n + 1;
  });
};

fn();
