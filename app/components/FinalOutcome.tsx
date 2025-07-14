import { FinalOutcomeType } from '@/types/FinalOutcome';

interface FinalOutcomeProps {
  data: FinalOutcomeType | null;
}

export default function FinalOutcome({ data }: FinalOutcomeProps) {
  if (!data) return null;

  const {
    enterpriseClients,
    employeesTrained,
    threatRecognition,
    keyAchievements,
    cybersecurityInnovation
  } = data;

  return (
    <section className="bg-black text-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Final Outcome</h2>

      <div className="flex flex-col sm:flex-row sm:space-x-8 mb-6">
        <div>
          <span className="text-red-500 font-bold text-xl">{enterpriseClients}+</span>
          <p>Enterprise Clients</p>
        </div>
        <div>
          <span className="text-green-500 font-bold text-xl">{employeesTrained}+</span>
          <p>Employees Trained</p>
        </div>
        <div>
          <span className="text-blue-500 font-bold text-xl">{threatRecognition}%</span>
          <p>Threat Recognition Improvement</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2">Key Achievements</h3>
      <ul className="list-disc ml-5 mb-4">
        {keyAchievements.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mb-2">Cybersecurity Innovation</h3>
      <p>{cybersecurityInnovation}</p>
    </section>
  );
}
