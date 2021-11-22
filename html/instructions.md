# Lab 18 Nov

The data will be collected by a server page at http://test.hallys.net/server.php (yes this is a live page)

## The form should have the following fields:

Are you saitisfied with our service?
Dear customer, we would like you to dedicate and few minutes to fill out this survey. It will help us improve the service we grant our customers. Thanks!

1. How long have you been using our software?
   (submitted as name "lengthOfUse")
   <radio> Less than a month
   <radio> Less than a year
   <radio> More than a year
2. What is important to you in customer service?
   <checkbox name="importencePatience"> Patience
   <checkbox name="importenceChat"> Chat
   <checkbox name="ImportenceSpeed"> Speed and reaction
   <checkbox> other <text input name=ImportenceOther>

3 Are you satisfies with our customer service?
(submitted as name "isSatisfied")
<radio> Yes
<radio> No

4 Are there any comments you may have to help us improve our service?
<text area name="extraComments">

5 A Hidden field name='source' this should be set to your github username

<submit><reset>
