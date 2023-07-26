"use client"
import MessagesList from "./MessagesList";
import NavBar from "./Navbar";


export default function Home() {
  const messages = [{}]
  return (<>
    <NavBar />
    <header>
      <h1>Regional Messages(working title)</h1>
    </header>
    <article>
      {/* <h2>About the Project</h2><p>My intention with this app is to create a location based memo service where users can leave notes, either with a name attached or anonymously, at their current location allowing anyone at or around that location will be able to see it.</p><p>This is meant to be a webapp that lets people share the experiences and perspectives in a personal and intimate way for example:</p><ul><li>when I went hiking with a friend we got to the top and wanted to leave a message to anyone who was seeing what we were seeing</li></ul><p>For the first iteration of this project I plan on having a small testing pool (the students and staff of Hack Reactor) over a fairly short amount of time(1-2 hours) and using developer tools, primarily the location spoofer in chrome dev tools so that is the reason I went with a SQL database though at scale this would not be ideal due to the fact that every entry in the database would have to be read in order to filter it down to what’s in your immediate vicinity.</p><p>  I hope to transition this over to either a graph database or implement postgis and eventually make it a service</p><p>  There are no current plans for comments, pages or a map GUI though that may change over time.</p><h2>What I Plan on Implementing:</h2><ul><li><li>Add:</li><ul><li>user accounts(Probably going to use auth0[plz help me lizz])</li><li>support for Photos</li><li>groups to filter who can see your notes</li><li>conditial that either:</li><li><ul><li>lets you specify a date/time that you want your note to show up</li><li>deletes your note after a specified amount of time</li><li>changes the range in which people can see your note</li></ul></li></ul></li><li>A mobile version that:</li><li><ul><li>pushes a notification when you're by a note</li></ul></li></ul> */}
      <MessagesList />
    </article>
  </>)
}