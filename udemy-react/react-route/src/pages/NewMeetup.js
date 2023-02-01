import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPages() {
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-4b283-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return (
    <section>
      <h1>New Meetups Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPages;
