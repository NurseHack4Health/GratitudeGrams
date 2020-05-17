
<img src="images/logo.png" width="256" />

# Root - Grow Your Gratitude
A web and mobile platform for nursing teams providing continuous gratitude reinforcement by gamification incentives and customizable positive messages.

## Problem
Frontline health care works caring for COVID-19 patients are 1.6 times more likely to experience distress. Daily gratitude practice can buffer this distress and reduce burnout. No easy way exists to provide nurses with continual gratitude reinforcement.

## Technologies Used
**Backend:** Node.js/Express, CosmoDB (using MongoDB API with Mongoose).

## Installing

1. Clone the repo:

```bash
$ git clone https://github.com/NurseHack4Health/Root.git
```

2. Install the dependencies:

```bash
$ cd Root
$ npm install
```

3. Configure the environment variables
```bash
# Create a .env file in root directory with the following variables

COSMOSDB_HOST=<INSERT HOST ADDRESS>
COSMOSDB_DBNAME=<INSERT DBNAME>
COSMOSDB_PORT=<INSERT PORT>
COSMOSDB_USER=<INSERT USER>
COSMOSDB_PASS=<INSERT PASSWORD>
```

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in the production mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm dev`

**Note, this script requires `nodemon` package to be installed seperately or globally**

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## API spec


### `GET /:threadId`

param|type|description
--|--|--
:threadId|`String`|The ID of the thread to get

#### Response

field|type|description
---|---|---
_id|`String`|Id of the Thread
usernames|`String[]`|Array containing usernames of thread participants
userIds|`String[]`|Array of userIds of thread participants
messages|[Message](#Message)`[]`|Array of messages sent between participants of thread

##### Message
  field|type|description
  ---|---|---
  _id|`String`|Id of the Message
  senderId|`String`|User ID of sender
  recipientId|`String`|User Id of recipient
  seen|`Boolean`|Whether message has been seen by recipient
  resource|`String`|The resource attached to the message
  resourceClaimed|`Boolean`|Whether the attached resource has been claimed by recipient
  content|`String`|The text body of the message
  createdAt|`Date`|Time the message was created
  
---

### `POST /:threadId`

|param|type|description
------|----|-----------
content|`String`|The text body of the message.
resource|`String`|Resource to attach to the message. <br> One of ['sun', 'soil', 'water'].
senderId|`String`|User ID of sender
recipientId|`String`|User Id of recipient

---

### `GET /users/:userId`
param|type|description
--|--|--
userId|`String`|(Required) ID of the user.

#### Response
field|type|Description
--|--|--
username|`String`|Username of the requested user.
avatar|`String`|URL to the requested user's avatar media.
displayName|`String`|The display name of the requested user.
availableGiveResources|`Object`|Object containing available resources for the requested user to give to other users.<br>Object properties:<br>soil: `Number`<br>sun: `Number`<br>water: `Number`
tree|`Object`|Object containing information about the user's tree.<br>Object properties:<br>size: `Number`<br>soil: `Number`<br>sun: `Number`<br>water: `Number`
fruitPoints|`Number`|Current number of fruit points the user has received.
transactionHistory|[Transaction](#Transaction)`[]`|Array of transactions the requested user has completed by redeeming fruit points for prizes.

##### Transaction
field|type|Description
--|--|--
prizeId|`String`|ID of the prize that was redeemed in the transaction.
prizeCost|`Number`|Cost (in fruit points) of the prize in the transaction.
createdAt|`Date`|Date and time the transaction was completed.

---

### `GET /threads/user/:userId`

|param|type|description
--|--|--
:threadId|`String`|The ID of the user for which to get threads

#### Response: `Thread[]`

##### Thread

|field|type|description
--|--|--
_id|String|Id of the Thread
usernames|`String[]`|Array containing usernames of thread participants
userIds|`String[]`|Array of userIds of thread participants

---

### `GET /users/search`
param|type|description
--|--|--
searchText|`String`|(Required) Text that you want to search usernames for.

#### Response
Array of users that match the supplied `searchText` paramater.
field|type|Description
--|--|--
userName|`String`|Username matching search criteria
_id|`String`|Unique ID of the username
<br>

### `POST /users`
param|type|description
--|--|--
username|`String`|(Required) Username of the new user.
password|`String`|(Required) Password of the new user.
email|`String`|(Required) Email address of the new user.
refererId|`String`|(Optional) If user is registering with a referal URL, the id of the referer.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.