<?php
$name = $email = $phone = $hospitalName = $city = $department = $message = '';
$nameErr = $emailErr = $phoneErr = $hospitalNameErr = $cityErr = $departmentErr = $messageErr = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate name
    if (empty($_POST["name"])) {
        $nameErr = "Name is required";
    } else {
        $name = $_POST['name'];
    }

    // Validate email
    if (empty($_POST["email"])) {
        $emailErr = "Email is required";
    } else {
        $email = $_POST['email'];
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
        }
    }

    // Validate phone
    if (empty($_POST["phone"])) {
        $phoneErr = "Phone number is required";
    } else {
        $phone = $_POST['phone'];
        if (!preg_match("/^[0-9]{10}$/", $phone)) {
            $phoneErr = "Invalid phone number format";
        }
    }

    // Validate hospital name
    if (empty($_POST["hospitalName"])) {
        $hospitalNameErr = "Hospital name is required";
    } else {
        $hospitalName = $_POST['hospitalName'];
    }

    // Validate city
    if (empty($_POST["city"])) {
        $cityErr = "City is required";
    } else {
        $city = $_POST['city'];
    }

    // Validate department/subject
    if (empty($_POST["department"])) {
        $departmentErr = "Department/Subject is required";
    } else {
        $department = $_POST['department'];
    }

    // Validate message
    if (empty($_POST["message"])) {
        $messageErr = "Message is required";
    } else {
        $message = $_POST['message'];
    }

    // Send email if there are no validation errors
    if (empty($nameErr) && empty($emailErr) && empty($phoneErr) && empty($hospitalNameErr) && empty($cityErr) && empty($departmentErr) && empty($messageErr)) {
        $to = 'shradhha.mulange@gmail.com'; // Replace with your own email address
        $subject = 'New query from MedicoWriter';
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $message_body = "Name: $name\nEmail: $email\nPhone: $phone\nHospital Name: $hospitalName\nCity: $city\nDepartment/Subject: $department\nMessage: $message";

        if (mail($to, $subject, $message_body, $headers)) {
            // Redirect to thankyou.html
            header("Location: thankyou.html");
            exit; // Stop executing the rest of the code
        } else {
            echo "Oops! Something went wrong.";
        }
    }
}
?>