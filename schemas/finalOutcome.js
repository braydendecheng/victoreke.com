export default {
  name: 'finalOutcome',
  title: 'Final Outcome',
  type: 'object',
  fields: [
    { name: 'enterpriseClients', title: 'Enterprise Clients', type: 'number' },
    { name: 'employeesTrained', title: 'Employees Trained', type: 'number' },
    { name: 'threatRecognition', title: 'Threat Recognition Improvement (%)', type: 'number' },
    { name: 'keyAchievements', title: 'Key Achievements', type: 'array', of: [{ type: 'string' }] },
    { name: 'cybersecurityInnovation', title: 'Cybersecurity Innovation', type: 'text' }
  ]
}
