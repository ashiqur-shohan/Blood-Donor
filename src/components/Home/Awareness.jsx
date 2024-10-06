

const Awareness = () => {
    const bloodGroups = [
      {
        type: "A+",
        info: "Can receive from A+, A-, O+, O-. Universal recipient for A and O groups.",
      },
      {
        type: "A-",
        info: "Can receive from A- and O-. Universal donor for all A and AB groups.",
      },
      {
        type: "B+",
        info: "Can receive from B+, B-, O+, O-. Universal recipient for B and O groups.",
      },
      {
        type: "B-",
        info: "Can receive from B- and O-. Universal donor for all B and AB groups.",
      },
      {
        type: "AB+",
        info: "Universal recipient. Can receive from all blood types.",
      },
      { type: "AB-", info: "Can receive from all negative blood types." },
      {
        type: "O+",
        info: "Can receive from O+ and O-. Universal donor for all positive blood types.",
      },
      { type: "O-", info: "Universal donor. Can donate to all blood types." },
    ];
    return (
      <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Blood Group Awareness
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {bloodGroups.map((group) => (
            <div key={group.type} className="bg-slate-100 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">{group.type}</h2>
              <p className="text-sm">{group.info}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Awareness;