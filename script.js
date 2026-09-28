function showMyInfo() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var birthday = document.getElementById("birthday").value;
    var city = document.getElementById("city").value;
    var province = document.getElementById("province").value;
    var year = document.getElementById("year").value;
    var course = document.getElementById("course").value;
    var color = document.getElementById("color").value;
    var food = document.getElementById("food").value;
    var bio = document.getElementById("bio").value;

    var contact = " ";
    var selectedRadio = document.querySelector('input[name="contact"]:checked');
    if (selectedRadio != null) {
        contact = selectedRadio.value;
    }

    var newsletter = "No";
    if (document.getElementById("newsletter").checked) {
        newsletter = "Yes";
    }

    var answer = document.getElementsByClassName("answer");
    answer[0].textContent = fullName;
    answer[1].textContent = email;
    answer[2].textContent = age;
    answer[3].textContent = phone;
    answer[4].textContent = birthday;
    answer[5].textContent = city;
    answer[6].textContent = province;
    answer[7].textContent = year;
    answer[8].textContent = course;
    answer[9].textContent = color;
    answer[10].textContent = food;
    answer[11].textContent = contact;
    answer[12].textContent = bio;
    answer[13].textContent = newsletter;

    var card = document.querySelector("article");
    card.style.borderTopColor = color;

    document.getElementById("message").textContent = "Display Successfully!";
}