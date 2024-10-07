import { UserIcon, UserGroupIcon } from "@heroicons/react/24/solid";

const bloodGroups = [
  {
    type: "A+",
    canDonateTo: ["A+", "AB+"],
    canReceiveFrom: ["A+", "A-", "O+", "O-"],
    percentage: "30%",
    description:
      "Second most common blood type. Can donate red blood cells to A and AB types.",
  },
  {
    type: "B+",
    canDonateTo: ["B+", "AB+"],
    canReceiveFrom: ["B+", "B-", "O+", "O-"],
    percentage: "9%",
    description:
      "Can donate red blood cells to B and AB types. Can receive from all B and O types.",
  },
  {
    type: "AB+",
    canDonateTo: ["AB+"],
    canReceiveFrom: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    percentage: "3%",
    description:
      "Universal recipient. Can receive red blood cells from all blood types.",
  },

  {
    type: "O+",
    canDonateTo: ["A+", "B+", "AB+", "O+"],
    canReceiveFrom: ["O+", "O-"],
    percentage: "39%",
    description:
      "Most common blood type. Can donate red blood cells to all positive blood types.",
  },
  {
    type: "A-",
    canDonateTo: ["A+", "A-", "AB+", "AB-"],
    canReceiveFrom: ["A-", "O-"],
    percentage: "6%",
    description:
      "Universal plasma donor. Can donate red blood cells to both A and AB blood types.",
  },
  {
    type: "B-",
    canDonateTo: ["B+", "B-", "AB+", "AB-"],
    canReceiveFrom: ["B-", "O-"],
    percentage: "2%",
    description:
      "Can donate red blood cells to both B and AB types. Can only receive from B- and O-.",
  },
  {
    type: "AB-",
    canDonateTo: ["AB+", "AB-"],
    canReceiveFrom: ["A-", "B-", "AB-", "O-"],
    percentage: "1%",
    description:
      "Universal plasma donor. Can receive red blood cells from all negative blood types.",
  },
  {
    type: "O-",
    canDonateTo: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    canReceiveFrom: ["O-"],
    percentage: "9%",
    description:
      "Universal red cell donor. Can donate red blood cells to all blood types.",
  },
];

const BloodGroupCard = ({ group }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div
        className={`p-4 ${
          group.type.includes("-") ? "bg-red-600" : "bg-red-500"
        } text-white`}
      >
        <h3 className="text-2xl font-bold">{group.type}</h3>
        <p className="text-sm">{group.percentage} of population</p>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-4">{group.description}</p>
        <div className="flex justify-between mb-2">
          <div className="flex items-center">
            <UserGroupIcon className="h-5 w-5 text-green-500 mr-2" />
            <span className="text-sm font-medium">Can donate to:</span>
          </div>
          <span className="text-sm">{group.canDonateTo.join(", ")}</span>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <UserIcon className="h-5 w-5 text-blue-500 mr-2" />
            <span className="text-sm font-medium">Can receive from:</span>
          </div>
          <span className="text-sm">{group.canReceiveFrom.join(", ")}</span>
        </div>
      </div>
    </div>
  );
};

const Awareness = () => {
  return (
    <div className=" mx-4 lg:mx-8  px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Blood Group Awareness
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bloodGroups.map((group) => (
          <BloodGroupCard key={group.type} group={group} />
        ))}
      </div>
    </div>
  );
};

export default Awareness;
