import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from "@mui/material/IconButton";
import InsertCommentRoundedIcon from '@mui/icons-material/InsertCommentRounded';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import profilePic from './Images/logo192.png';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';import reportWebVitals from './reportWebVitals';
import { getAllByPlaceholderText, logDOM } from '@testing-library/react';

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name + "'s profile picture"}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="profileHeader">
      <div className="ProfilePicture">
        <Avatar user={props.user} />
      </div>
      <div className="UserInfo">
        <div className="UserInfo-text">
          <div className="UserInfo-name">
            {props.user.name}
          </div>
          <div className="UserInfo-username">
            {props.user.username}
          </div>
        </div>
        <div className="UserInfo-date">
          {props.user.date}
        </div>
      </div>
    </div>
  );
}

function Post(props) {
  return (
    <div className="post">
      <div className="post-header">
        <UserInfo user={props.author} />
      </div>
      <div className="post-text">
        {props.author.text}
      </div>
      <div className="tag-content">
        <div className="tags">
          <button className="tag">
            {props.tagName}
          </button>
          <div className="PostActions">
            <IconButton className="CommentButton">
              <InsertCommentRoundedIcon sx={{ color: "#FFFFFF"}}/>
            </IconButton>
            <IconButton className="LikeButton">
              <FavoriteBorderIcon sx={{ color: "#FFFFFF"}}/>
            </IconButton>
            <IconButton className="ShareButton">
              <IosShareOutlinedIcon sx={{ color: "#FFFFFF"}}/>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function MakePost(props) {
  return (
    <div className="MakePost">
      <div className="ProfilePicture">
        <Avatar user={props.user} />
      </div>
      <div className="MakePost-content">
        <div className="MakePost-insert">
          
        </div>
        <div className="SuggestedTags">
          <button className="tag">
            {props.tagName}
          </button>
        </div>
      </div>
    </div>
  )
}

const authorKaley = {
  name: "Kaley Kwan",
  username: "@kaley",
  date: "a few seconds ago",
  avatarURL: "./Images/logo192.png",
  text: "just got accepted into the Launchpad program! My project idea is a social networking app for women in tech.",
  following: "0",
  followers: "0"
};

const authorEmma = {
  name: "Emma Kwan",
  username: "@emma",
  date: "Sep 15",
  avatarURL: profilePic,
  text: "just posted on my web3 blog! Here's a sneak peak: If we want to successfully onboard the next one million people into web3, then I believe we need to develop more opinionated curriculums, scope down the resources we deem necessary for newbies, and better understand who is curious about this space and what obstacles they face.",
  following: "0",
  followers: "0"
};

const authorCuby = {
  name: "Cuby Ng",
  username: "@cuby",
  date: "Sep 22",
  avatarURL: "../public/logo192.png",
  text: "I manage people at LinkedIn",
  following: "0",
  followers: "0"
};

const authorEd = {
  name: "Ed Kwan",
  username: "@ed",
  date: "Oct 1",
  avatarURL: "/public/logo192.png",
  text: "I'm a tech bro",
  following: "0",
  followers: "0"
};

class Feed extends React.Component {

  render() {
    return (
      <div>
        <div className="feed">
          <Post author={authorKaley} text={authorKaley} tagName={"internship"}/>
          <Post author={authorEmma} text={authorEmma} tagName={"web3"}/>
          <Post author={authorCuby} text={authorCuby} tagName={"job"}/>
          <Post author={authorEd} text={authorEd} tagName={"job"}/>
        </div>
      </div>
    );
  }

}

function LoopsForYou(props) {
  return (
    <div className="LoopsForYou">
      <div className="LoopsForYou-text">
        Loops for you
      </div>
      <div className="LoopsForYou-loops">
        <button className="sidebar-loop">
            {props.tags.tagName1}
        </button>
        <button className="sidebar-loop">
            {props.tags.tagName2}
        </button>
        <button className="sidebar-loop">
            {props.tags.tagName3}
        </button>
        <button className="sidebar-loop">
            {props.tags.tagName4}
        </button>
      </div>
    </div>
  )
}

function SuggestedUser(props) {
  return (
    <div className="SuggestedUser-content">
      <div className="SuggestedUser-users">
        <div className="SuggestedUser-text">
          <div className="SuggestedUser-name">
            {props.user.name}
          </div>
          <div className="SuggestedUser-username">
            {props.user.username}
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeworkWithMe(props) {
  return (
    <div className="CodeworkWithMe">
      <div className="CodeworkWithMe-text">
        Codework with me
      </div>
      <div className="CodeworkWithMe-users">
        <div className="suggested-user">
          <div className="suggested-user-info">
            <div className="suggested-user-profilepicture">
              <Avatar user={props.authors.author1} />
            </div>
            <div className="suggested-user-textinfo">
              <SuggestedUser user={props.authors.author1} />
            </div>
          </div>
          <IconButton className="AddUserButton">
              <AddOutlinedIcon sx={{ color: "#B089E2"}}/>
          </IconButton>
        </div>
        <div className="suggested-user">
          <div className="suggested-user-info">
            <div className="suggested-user-profilepicture">
              <Avatar user={props.authors.author2} />
            </div>
            <div className="suggested-user-textinfo">
              <SuggestedUser user={props.authors.author2} />
            </div>
          </div>
          <IconButton className="AddUserButton">
              <AddOutlinedIcon sx={{ color: "#B089E2"}}/>
          </IconButton>
        </div>
        <div className="suggested-user">
          <div className="suggested-user-info">
            <div className="suggested-user-profilepicture">
              <Avatar user={props.authors.author3} />
            </div>
            <div className="suggested-user-textinfo">
              <SuggestedUser user={props.authors.author3} />
            </div>
          </div>
          <IconButton className="AddUserButton">
              <AddOutlinedIcon sx={{ color: "#B089E2"}}/>
          </IconButton>
        </div>
        <div className="suggested-user">
          <div className="suggested-user-info">
            <div className="suggested-user-profilepicture">
              <Avatar user={props.authors.author4} />
            </div>
            <div className="suggested-user-textinfo">
              <SuggestedUser user={props.authors.author4} />
            </div>
          </div>
          <IconButton className="AddUserButton">
              <AddOutlinedIcon sx={{ color: "#B089E2"}}/>
          </IconButton>
        </div>
      </div>
    </div>
  )
}

const tags = {
  tagName1: "internships",
  tagName2: "Purdue",
  tagName3: "web dev",
  tagName4: "web3"
}

const authors = {
  author1: authorKaley,
  author2: authorEmma,
  author3: authorCuby,
  author4: authorEd
}

class RightSideBar extends React.Component {
  render() {
    return (
      <div className="RightSideBar">
        <div className="rightSideBar-LoopsForYou">
          <LoopsForYou tags={tags}  />
        </div>
        <div className="rightSideBar-CodeworkWithMe">
          <CodeworkWithMe authors={authors} />
        </div>
      </div>
    )
  }
}

function OptionsSideBar(props) {
  return (
    <div className="OptionsSideBar">
      <div className="OptionsSideBar-Options">
        <button className="sidebar-option">
            {props.tags.tagName1}
        </button>
        <button className="sidebar-option">
            {props.tags.tagName2}
        </button>
        <button className="sidebar-option">
            {props.tags.tagName3}
        </button>
        <button className="sidebar-option">
            {props.tags.tagName4}
        </button>
      </div>
    </div>
  )
}

function ProfileThumbnail(props) {
  return (
    <div className="ProfileThumbnail">
      <div className="ProfileThumbnail-header">

      </div>
      <div className="ProfileThumbnail-UserInfo">
        <div className="ProfileThumbnail-Name">
          {props.author.name}
        </div>
        <div className="ProfileThumbnail-Username">
          {props.author.username}
        </div>
      </div>
      <div className="ProfileThumbnail-UserStats">
        <div className="ProfileThumbnail-UserStats-Box">
          <div className="UserStats-Count">
            {props.author.followers}
          </div>
          <div className="UserStats-Label">
            Followers
          </div>
        </div>
        <div className="ProfileThumbnail-UserStats-Box">
          <div className="UserStats-Count">
            {props.author.following}
          </div>
          <div className="UserStats-Label">
            Following
          </div>
        </div>
      </div>
      <div className="ProfileThumbnail-ProfileLink">
        <AccountCircleOutlinedIcon sx={{ color: "#B089E2"}}/>
        <button className="ProfileThumbnail-LinkButton">
          Profile
        </button>
      </div>
    </div>
  )
}

class LeftSideBar extends React.Component {
  render() {
    return (
      <div className="LeftSideBar">
        <div className="leftSideBar-OptionsSideBar">
          <ProfileThumbnail author={authorKaley} />
          <OptionsSideBar tags={options}  />
        </div>
      </div>
    )
  }
}

const options = {
  tagName1: "Notifications",
  tagName2: "Messages",
  tagName3: "My Loops",
  tagName4: "Accessibility"
}

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <LeftSideBar />
        <Feed />
        <RightSideBar />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomePage />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
