var hand_id = "";

$(function () {
  // この中に書く
  $(".hand").on("click", function (e) {
    hand_id = e.target.id;
    console.log(hand_id);
    game();
    setTimeout("location.reload()", 500);
  });
});

function game() {
  switch (php.gameNum) {
    case "0":
      judge_win();
      break;
    case "1":
      judge_draw();
      break;
    case "2":
      judge_lose();
      break;
  }
}

function judge_win() {
  switch (php.handNum) {
    case "0":
      if (hand_id == "pa_btn") {
        good();
      } else {
        bad();
      }
      break;
    case "1":
      if (hand_id == "gu_btn") {
        good();
      } else {
        bad();
      }
      break;
    case "2":
      if (hand_id == "choki_btn") {
        good();
      } else {
        bad();
      }
      break;
  }
}

function judge_draw() {
  switch (php.handNum) {
    case "0":
      if (hand_id == "gu_btn") {
        good();
      } else {
        bad();
      }
      break;
    case "1":
      if (hand_id == "choki_btn") {
        good();
      } else {
        bad();
      }
      break;
    case "2":
      if (hand_id == "pa_btn") {
        good();
      } else {
        bad();
      }
      break;
  }
}

function judge_lose() {
  switch (php.handNum) {
    case "0":
      if (hand_id == "choki_btn") {
        good();
      } else {
        bad();
      }
      break;
    case "1":
      if (hand_id == "pa_btn") {
        good();
      } else {
        bad();
      }
      break;
    case "2":
      if (hand_id == "gu_btn") {
        good();
      } else {
        bad();
      }
      break;
  }
}

function good() {
  $("#gb").text("good!");
  $("#gb").css("color", "#FF0080");
}

function bad() {
  $("#gb").text("bad!");
  $("#gb").css("color", "#acb6e5");
}
