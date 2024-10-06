import { User } from "lucide-react";

const TeamMember = ({ name, role, photo, bio, major, year }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
    {photo ? (
      <img src={photo} alt={name} className="w-32 h-32 rounded-full mb-4" />
    ) : (
      <User size={64} className="text-gray-400 mb-4" />
    )}
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-gray-600">{role}</p>
    <p className="text-sm text-gray-500">
      {major}, Year {year}
    </p>
    <p className="mt-2 text-center">{bio}</p>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Shohan",
      role: "Frontend Developer",
      photo: "",
      bio: "Passionate about creating intuitive user interfaces and improving user experiences.",
      major: "Computer Science",
      year: 3,
    },
    {
      name: "Mahbub",
      role: "Backend Developer",
      photo: "",
      bio: "Experienced in database design and API development. Loves solving complex problems.",
      major: "Software Engineering",
      year: 4,
    },
    {
      name: "Himel",
      role: "UI/UX Designer",
      photo: "",
      bio: "Creative thinker with a keen eye for design. Focused on making the app both beautiful and functional.",
      major: "Information Systems",
      year: 3,
    },
  ];
  return (
    <div>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            We are three passionate university students committed to making a
            difference in our community through this blood donor platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
