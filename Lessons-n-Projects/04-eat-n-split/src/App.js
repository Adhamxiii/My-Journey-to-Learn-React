import React, { useState } from "react";

import "./App.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriends, setSelectedFriends] = useState(null);

  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  };

  const handleSelectFriend = (friend) => {
    // setSelectedFriends(friend);
    setSelectedFriends((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };

  const splitBillHandler = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriends.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriends(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelectFriend}
          selectedFriends={selectedFriends}
        />
        {showAddFriend && (
          <FormAddFriend
            showAddFriend={showAddFriend}
            onAddFriend={handleAddFriend}
          />
        )}
        <Button onClick={() => setShowAddFriend(!showAddFriend)}>
          {!showAddFriend ? `Add Friend` : `Close`}
        </Button>
      </div>

      {selectedFriends && (
        <FormSplitBill
          friend={selectedFriends}
          splitBillHandler={splitBillHandler}
          key={selectedFriends.id}
        />
      )}
    </div>
  );
};

export default App;

const FriendsList = ({ friends, onSelection, selectedFriends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriends={selectedFriends}
        />
      ))}
    </ul>
  );
};

const Friend = ({ friend, onSelection, selectedFriends }) => {
  const isSelected = selectedFriends?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance > 0 ? (
        <p className="green">
          You owe {friend.name} {friend.balance}
        </p>
      ) : friend.balance < 0 ? (
        <p className="red">
          {friend.name} owes you {Math.abs(friend.balance)}
        </p>
      ) : (
        <p>You and {friend.name} are even</p>
      )}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? `Close` : `Select`}
      </Button>
    </li>
  );
};

const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const submitHandler = (e) => {
    e.preventDefault();

    const id = crypto.randomUUID();

    if (!name || !image) return;

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={submitHandler}>
      <label htmlFor="name">🧑‍🤝‍👩 Friend Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="image">🖼️ Image URL</label>
      <input
        type="text"
        id="image"
        name="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
};

const FormSplitBill = ({ friend, splitBillHandler }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    splitBillHandler(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  return (
    <form className="form-split-bill" onSubmit={submitHandler}>
      <h2>Split a bill with {friend.name}</h2>

      <label htmlFor="bill">💰 Bill value</label>
      <input
        type="text"
        id="bill"
        name="bill"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="expense">🧍Your expense</label>
      <input
        type="text"
        id="expense"
        name="expense"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label htmlFor="expense2">🧑‍🤝‍👩 {friend.name}'s expense</label>
      <input
        type="text"
        id="expense2"
        name="expense2"
        disabled
        value={paidByFriend}
      />

      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};
