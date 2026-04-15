import React from "react";
import ReviewCard from "../components/ReviewCard";

const Reviews = () => {
  return (
    <section id="reviews">
      <div className="section-header-container">
        <h3>Reviews</h3>
      </div>
      <div className="review-card-container">
        <ReviewCard
          goTo="https://www.linkedin.com/in/eburdekin/"
          personName="Sydney Walcoff"
          jobRelation="Former Manager"
          jobPosition="Developer Lead at Hack for LA"
        >
          <p>
            I had the pleasure of working with Eileen on the Expunge Assist
            project at Hack for LA, where she consistently impressed me with her
            technical skills, initiative, and collaborative spirit. As a
            developer on our team, Eileen brought both creativity and precision
            to her work—delivering clean, efficient code and thoughtful
            solutions to complex problems.
          </p>
          <p>
            What stood out most about Eileen was her proactive attitude. She
            didn’t just wait for tasks to be assigned—she actively looked for
            ways to improve the user experience, optimize workflows, and support
            teammates wherever needed. Even in a volunteer setting with limited
            resources, Eileen approached every challenge with professionalism
            and enthusiasm.
          </p>
          <p>
            She is a reliable and supportive team member, always open to
            feedback and eager to learn. I would gladly work with Eileen again,
            and any team would benefit from her talent and work ethic.
          </p>
        </ReviewCard>
        <ReviewCard
          goTo="https://www.linkedin.com/in/eburdekin/"
          personName="Kelly Reilly"
          jobRelation="Former Teammate"
          jobPosition="Value Consultant at Google"
        >
          <p>
            "If you're reading this and considering hiring Eileen, I can only
            say that I hope I beat you to it! Eileen is the single most
            adaptable, exceptional talent I have ever worked with.
          </p>
          <p>
            A combination of tactical precision and a polished, client-friendly
            nature made her a standout talent for client-services roles.
          </p>
          <p>
            One of the biggest wins in our agency's history was due in
            no-small-part to Eileen's work ethic and capacity to work rungs
            above her duties."
          </p>
        </ReviewCard>
        <ReviewCard
          goTo="https://www.linkedin.com/in/eburdekin/"
          personName="Jake Bishop"
          jobRelation="Former Direct Report"
          jobPosition="Account Executive at Procore"
        >
          <p>
            "Everyone should know what a pleasure it is to work with and for
            Eileen.
          </p>
          <p>
            Eileen is an exemplary teammate with quiet confidence and
            competence. I attribute most of what I have learned in digital media
            to my time spent working alongside Eileen.
          </p>
          <p>
            If you are looking for someone who is organized, handles themselves
            well under pressure, and thinks critically, look no further."
          </p>
        </ReviewCard>
      </div>
    </section>
  );
};

export default Reviews;
