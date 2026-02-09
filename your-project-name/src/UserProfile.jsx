function UserProfile() {
  const name = "Teddy Rowland";
  const bio = "Software developer building clean and simple user interfaces.";
  const profileImage =
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop&crop=face";

  return (
    <div
      style={{
        maxWidth: "420px",
        width: "90%",
        margin: "60px auto",
        padding: "28px",
        borderRadius: "14px",
        boxShadow: "0 4px 14px rgba(0,0,0,0.10)",
        backgroundColor: "white",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <img
        src={profileImage}
        alt={`${name} profile`}
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "4px solid #e9ecef",
          marginBottom: "16px",
        }}
      />

      <h1 style={{ fontSize: "26px", margin: "0 0 10px 0" }}>{name}</h1>

      <p style={{ fontSize: "16px", color: "#555", margin: 0, lineHeight: "1.5" }}>
        {bio}
      </p>
    </div>
  );
}

export default UserProfile;
