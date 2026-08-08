import hclLogoImg from '../assets/hcllogo.png';
import hcl50LogoImg from '../assets/hcl50logo.png';
import singerImg from '../assets/singer.png';

export const EVENT_CONFIG = {
  presenter: "HCLTech Presents",

  eventTitle: "Concert Countdown",

  artistName: "Sid Sriram",

  eventName: "Sid Sriram Live in Concert",

  subheading: "An Unforgettable Evening of Soulful Music & Melodies",

  // Target Date & Time
  // 22 August 2026, 4:00 PM IST
  targetDate: "2026-08-22T16:00:00+05:30",

  timezone: "Asia/Kolkata",

  // Display Information
  displayDate: "22 August 2026",

  displayDay: "Saturday",

  displayTime: "4:00 PM Onwards",

  venueName: "Vijayawada",

  venueLocation: "Vijayawada, Andhra Pradesh, India",

  // Branding Assets
  logos: {
    hcl: hclLogoImg,
    hcl50: hcl50LogoImg,
  },

  singerImage: singerImg,

  // Light Theme Branding Colors
  colors: {
    primaryGradientStart: "#6D2EDC",
    primaryGradientMid: "#7B3FE4",
    indigo: "#5C4DFF",
    blueVibrant: "#1769E8",
    bluePrimary: "#0072CE",

    slate: "#555F78",

    // Light theme
    card: "#FFFFFF",
    background: "#F8F9FF",

    // Soft accent backgrounds
    lightPurple: "#F1EAFF",
    lightBlue: "#EAF2FF",

    // Main text
    textPrimary: "#111C3D",
    textSecondary: "#555F78",
  }
};