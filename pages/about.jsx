const AboutPage = () => {
  return (
    <div>
      <h1>📖 Overview</h1>

      <h2>Summary</h2>
      <p>
        Passionate and results-driven Computer Science graduate with experience
        in software development, data analytics, and machine learning. Skilled
        in Python, Java, SQL, and visualization tools such as Tableau, Power BI.
        Strong problem-solving and communication abilities, demonstrated through
        successful projects in emotion classification and web development.
        Dedicated to leveraging technology to drive business insights and
        enhance user experiences. Proven leadership in mentoring and organizing
        workshops for aspiring tech enthusiasts. Fluent in Mandarin, Cantonese,
        English, and Malay. Eager to contribute to innovative projects and
        collaborate with diverse teams in the tech industry. Open to new
        opportunities.
      </p>
      
      <br></br>

      <h2>General Tech Stacks</h2>
      <ul>
        <li>Data Analytics</li>
        <li>Machine Learning and Artificial Intelligence</li>
        <li>Web Development (Frontend & Backend)</li>
      </ul>

      <br></br>

      <h2>💬 Languages</h2>
      <ul>
        <li>
          <strong>English:</strong> Professional
        </li>
        <li>
          <strong>Chinese:</strong> Fluent
        </li>
        <li>
          <strong>Malay:</strong> Native
        </li>
        <li>
          <strong>Cantonese:</strong> Fluent
        </li>
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
