function UserProfile() {
  // variables (required)
  const name = "Jordan Miles";
  const bio = "Software developer building clean and simple UI's.";
  const profileImage =
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face";

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        backgroundColor: "white",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <img
        src={profileImage}
        alt="profile"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "16px",
        }}
      />

      <h1>{name}</h1>
      <p style={{ color: "#555" }}>{bio}</p>
    </div>
  );
}

export default UserProfile;
