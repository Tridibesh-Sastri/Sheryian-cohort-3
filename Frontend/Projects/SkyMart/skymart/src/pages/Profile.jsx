import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";

const Profile = () => {
  const { isLogin, loginUser } = useContext(StoreContext);

  const [isEditing, setIsEditing] = useState(false);

  console.log("isLogin in Profile.jsx:", isLogin);
  console.log("loginUser in Profile.jsx:", loginUser);

  // If user is not logged in
  if (!isLogin || !loginUser) {
    return (
      <div style={styles.page}>
        <div style={styles.emptyCard}>
          <div style={styles.emptyIcon}>🔒</div>

          <h2 style={styles.emptyTitle}>You're not logged in</h2>

          <p style={styles.emptyText}>
            Please login to view your profile.
          </p>

          <button style={styles.primaryButton}>
            Login
          </button>
        </div>
      </div>
    );
  }

  // Generate initials for avatar
  const initials = loginUser.name
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* ================= HEADER ================= */}
        <div style={styles.profileHeader}>

          <div style={styles.avatar}>
            {initials || "U"}
          </div>

          <div style={styles.headerInfo}>
            <h1 style={styles.name}>
              {loginUser.name}
            </h1>

            <p style={styles.email}>
              {loginUser.email}
            </p>

            <span style={styles.activeBadge}>
              ● Active Account
            </span>
          </div>

          <button
            onClick={() => setIsEditing(!isEditing)}
            style={styles.editButton}
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        {/* ================= CONTENT ================= */}
        <div style={styles.content}>

          {/* Personal Information */}
          <section style={styles.section}>

            <div style={styles.sectionHeader}>
              <div>
                <h2 style={styles.sectionTitle}>
                  Personal Information
                </h2>

                <p style={styles.sectionDescription}>
                  Your basic account information
                </p>
              </div>
            </div>

            <div style={styles.grid}>

              {/* Name */}
              <div style={styles.field}>
                <label style={styles.label}>
                  Full Name
                </label>

                {isEditing ? (
                  <input
                    type="text"
                    defaultValue={loginUser.name}
                    style={styles.input}
                  />
                ) : (
                  <div style={styles.value}>
                    {loginUser.name || "Not provided"}
                  </div>
                )}
              </div>

              {/* Email */}
              <div style={styles.field}>
                <label style={styles.label}>
                  Email Address
                </label>

                {isEditing ? (
                  <input
                    type="email"
                    defaultValue={loginUser.email}
                    style={styles.input}
                  />
                ) : (
                  <div style={styles.value}>
                    {loginUser.email || "Not provided"}
                  </div>
                )}
              </div>

              {/* Contact Number */}
              <div style={styles.field}>
                <label style={styles.label}>
                  Contact Number
                </label>

                {isEditing ? (
                  <input
                    type="tel"
                    defaultValue={loginUser.contactNumber}
                    style={styles.input}
                  />
                ) : (
                  <div style={styles.value}>
                    {loginUser.contactNumber || "Not provided"}
                  </div>
                )}
              </div>

              {/* Terms */}
              <div style={styles.field}>
                <label style={styles.label}>
                  Terms & Conditions
                </label>

                <div style={styles.value}>
                  {loginUser.terms ? (
                    <span style={styles.accepted}>
                      ✓ Accepted
                    </span>
                  ) : (
                    <span style={styles.notAccepted}>
                      ✕ Not Accepted
                    </span>
                  )}
                </div>
              </div>

            </div>
          </section>

          {/* Account Security */}
          <section style={styles.section}>

            <div style={styles.sectionHeader}>
              <div>
                <h2 style={styles.sectionTitle}>
                  Account Security
                </h2>

                <p style={styles.sectionDescription}>
                  Manage your account security
                </p>
              </div>
            </div>

            <div style={styles.securityCard}>

              <div>
                <h3 style={styles.securityTitle}>
                  Password
                </h3>

                <p style={styles.securityText}>
                  Your password is securely hidden.
                </p>
              </div>

              <button style={styles.secondaryButton}>
                Change Password
              </button>

            </div>
          </section>

          {/* Account Information */}
          <section style={styles.section}>

            <div style={styles.sectionHeader}>
              <div>
                <h2 style={styles.sectionTitle}>
                  Account Information
                </h2>

                <p style={styles.sectionDescription}>
                  Information about your account
                </p>
              </div>
            </div>

            <div style={styles.accountGrid}>

              <div style={styles.accountItem}>
                <span style={styles.accountLabel}>
                  Account Status
                </span>

                <span style={styles.accountValue}>
                  <span style={styles.statusDot}></span>
                  Active
                </span>
              </div>

              <div style={styles.accountItem}>
                <span style={styles.accountLabel}>
                  Email Verified
                </span>

                <span style={styles.accountValue}>
                  {loginUser.email ? "✓ Yes" : "✕ No"}
                </span>
              </div>

              <div style={styles.accountItem}>
                <span style={styles.accountLabel}>
                  Terms Accepted
                </span>

                <span style={styles.accountValue}>
                  {loginUser.terms ? "✓ Yes" : "✕ No"}
                </span>
              </div>

            </div>
          </section>

          {/* Save button when editing */}
          {isEditing && (
            <div style={styles.editActions}>

              <button
                onClick={() => setIsEditing(false)}
                style={styles.cancelButton}
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  // Add your update-user logic here
                  setIsEditing(false);
                }}
                style={styles.primaryButton}
              >
                Save Changes
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f7fb",
    padding: "40px 20px",
    boxSizing: "border-box",
    fontFamily:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  container: {
    maxWidth: "1000px",
    margin: "0 auto",
  },

  /* Header */

  profileHeader: {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "30px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
    marginBottom: "24px",
  },

  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    background: "#111827",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    fontWeight: "700",
    flexShrink: 0,
  },

  headerInfo: {
    flex: 1,
  },

  name: {
    margin: "0 0 5px",
    fontSize: "28px",
    fontWeight: "700",
    color: "#111827",
  },

  email: {
    margin: "0 0 10px",
    color: "#6b7280",
    fontSize: "15px",
  },

  activeBadge: {
    display: "inline-block",
    fontSize: "13px",
    fontWeight: "600",
    color: "#15803d",
    background: "#dcfce7",
    padding: "5px 10px",
    borderRadius: "20px",
  },

  editButton: {
    border: "1px solid #d1d5db",
    background: "#ffffff",
    color: "#111827",
    padding: "10px 16px",
    borderRadius: "9px",
    cursor: "pointer",
    fontWeight: "600",
  },

  /* Content */

  content: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },

  section: {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "28px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  },

  sectionHeader: {
    marginBottom: "24px",
  },

  sectionTitle: {
    margin: "0 0 5px",
    fontSize: "20px",
    fontWeight: "700",
    color: "#111827",
  },

  sectionDescription: {
    margin: 0,
    color: "#6b7280",
    fontSize: "14px",
  },

  /* Fields */

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "20px",
  },

  field: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  label: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#6b7280",
  },

  value: {
    minHeight: "44px",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    padding: "11px 14px",
    borderRadius: "9px",
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    color: "#111827",
    fontSize: "15px",
  },

  input: {
    width: "100%",
    minHeight: "44px",
    boxSizing: "border-box",
    padding: "11px 14px",
    borderRadius: "9px",
    border: "1px solid #d1d5db",
    outline: "none",
    fontSize: "15px",
    color: "#111827",
  },

  accepted: {
    color: "#15803d",
    fontWeight: "600",
  },

  notAccepted: {
    color: "#dc2626",
    fontWeight: "600",
  },

  /* Security */

  securityCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    padding: "18px",
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
  },

  securityTitle: {
    margin: "0 0 4px",
    fontSize: "15px",
    color: "#111827",
  },

  securityText: {
    margin: 0,
    color: "#6b7280",
    fontSize: "13px",
  },

  secondaryButton: {
    border: "1px solid #d1d5db",
    background: "#ffffff",
    padding: "9px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },

  /* Account */

  accountGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
  },

  accountItem: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    padding: "16px",
    borderRadius: "12px",
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
  },

  accountLabel: {
    fontSize: "12px",
    color: "#6b7280",
    fontWeight: "600",
  },

  accountValue: {
    fontSize: "14px",
    color: "#111827",
    fontWeight: "600",
  },

  statusDot: {
    display: "inline-block",
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "#22c55e",
    marginRight: "6px",
  },

  /* Edit */

  editActions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
  },

  cancelButton: {
    border: "1px solid #d1d5db",
    background: "#ffffff",
    padding: "11px 18px",
    borderRadius: "9px",
    cursor: "pointer",
    fontWeight: "600",
  },

  primaryButton: {
    border: "none",
    background: "#111827",
    color: "#ffffff",
    padding: "11px 18px",
    borderRadius: "9px",
    cursor: "pointer",
    fontWeight: "600",
  },

  /* Empty */

  emptyCard: {
    maxWidth: "450px",
    margin: "100px auto",
    background: "#ffffff",
    padding: "50px 30px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
  },

  emptyIcon: {
    fontSize: "45px",
    marginBottom: "15px",
  },

  emptyTitle: {
    margin: "0 0 8px",
    color: "#111827",
  },

  emptyText: {
    color: "#6b7280",
    marginBottom: "25px",
  },
};

export default Profile;