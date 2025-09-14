const skills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "TailwindCSS", level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-10 text-center">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
