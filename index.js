function takeANumber(current_line, new_person) {
  let line_number = current_line.length + 1;
  current_line.push(new_person);
  return `Welcome, ${new_person}. You are number ${line_number} in line.`;
}

var ticket_number = 0;

function takeANumber(current_line) {
  ticket_number++;
  current_line.push(ticket_number);
  return `Welcome, you are number ${ticket_number} in line.`;
}


function nowServing(katzDeliLine) {
  let first_person = katzDeliLine[0];
  katzDeliLine.shift(first_person);
  if (katzDeliLine.length > 0){
    return `Currently serving ${first_person}.`;
  }
  else if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
}

function currentLine(current_line) {
  let arr = [];
  if (current_line.length === 0) {
  return "The line is currently empty.";
  }
  for (let i = 0; i < current_line.length; i++) {
  arr.push(`${i+1}. ${current_line[i]}`);
  }
  return `The line is currently: ${arr.join(", ")}`;
}



