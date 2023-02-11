function abc(a) {
  try {
    switch (a) {
      case "a": {
        console.log("a");
        break;
      }
    }
  } catch (e) {
  } finally {
    console.log("finally");
  }
}

console.log(abc("a"));
