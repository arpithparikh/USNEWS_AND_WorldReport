# USNEWS_AND_WorldReport
USNEWS_AND_WorldREPORT

How to run!
node /USNEWS_AND_WorldREPORT/index.js


US News Software Developer Coding Exercise
==========================================

Thank you for your time in responding to this coding assessment. We find it
useful to have a small, controlled sample of code from our candidates to help
us assess their skill and style.

The goal of this assessment is to create a small web application that presents
a simple REST API. Your response should be a single zip file containing a set
of source code files with instructions on how to use your application.

Your target system is either Linux or Mac. You may specify in your instructions
which one.

Please write your application using one of JavaScript, PHP, Python, Ruby or Java. You
may assume your target system has your language's core interpreter available.

You may use third-party dependencies such as Django, Laravel,
Node.js/Express.js, Rails etc. Assume that your user is familiar with your
chosen language but not necessarily with your dependencies. You should include
a README.txt at the root of your zip archive with instructions on downloading
and configuring any dependencies and on starting your application. If your
application includes a lot of boilerplate because you used an application
generator provided by your framework, your README.txt should also say which
files contain the bulk of your customizations.

You may refer to and copy from public, official documentation related to your
chosen technology stack. You may also ask others for general help. However, you
may not have someone else substantially write your response for you. In other
words, the normal rules of coding in a professional setting apply here.

Here is the interface you should implement:

INPUT
=====
URI: /api
Method: GET
Required arguments:

* *word*: One of "fizz", "buzz" or "fizzbuzz".

* *max_value*: An integer greater than 0.

Example input:
    /api?word=fizz&max_value=30

OUTPUT
======
Format: JSON.
HTTP status: 400 if *status* is "error", otherwise 200.
Key/values:

* *numbers*: An array of all integers between and including 1 and *max_value*
that are divisible by 3 if *word* is "fizz", 5 if *word* is "buzz" and by both
3 and 5 if *word* is "fizzbuzz". The array should be in ascending order. If
*status* is "error", this should be an empty array.

* *status*. "error" if a required argument is missing or invalid, otherwise
"ok".

Example output matching example input:
    {"status": "ok", "numbers": [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]}

Again, thank you for your time. If you have any questions, please send them by
email to the person who sent you these instructions.

--Copyright US News and World Report, 2015.--

