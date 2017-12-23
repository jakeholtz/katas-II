// example []

function stringRotation(s, t) {
  if (s.length !== t.length || s.length + t.length < 2) {
    return false
  } else {
    s = s + s;
    return s.includes(t);
  }
}