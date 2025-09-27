// pages/api/plan.js
export default async function handler(req, res) {
  try {
    // Your plan logic here
    const response = {
      success: true,
      data: {
        // Your plan data structure
      }
    };
    
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}