const supabase = require("../config/supabaseConfig");

const getLatestData = async () => {
  const { data, error } = await supabase
    .from("sensor")
    .select("*")
    .order("id", { ascending: false })
    .limit(1);

  if (error) {
    throw error;
  }

  return data;
};

const getAllHistory = async () => {
  const { data, error } = await supabase
    .from("sensor")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    console.error("Supabase Error:", error);
    throw error;
  }

  console.log("Supabase Data:", data); // Debugging

  return data; // Return all data without slicing
};


module.exports = {
  getAllHistory,
  getLatestData,
};
