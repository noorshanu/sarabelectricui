"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCheckCircle,
  FiGrid,
  FiHome,
  FiUsers,
  FiSettings,
  FiWind,
  FiZap,
  FiDroplet,
  FiBell,
  FiShield,
  FiActivity,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import ScrollReveal from "../ScrollReveal";

const features = [
  "Preventive Maintenance",
  "Asset Management",
  "Cleaning Services",
  "Security Operations",
  "Technical Support",
  "Energy Optimization",
];

const navItems = [
  { id: "dashboard", icon: FiGrid, label: "Dashboard" },
  { id: "building", icon: HiOutlineOfficeBuilding, label: "Building" },
  { id: "users", icon: FiUsers, label: "Users" },
  { id: "settings", icon: FiSettings, label: "Settings" },
];

const dashboardStats = [
  { label: "Building Health", value: "98%", sublabel: "Excellent", progress: 98, color: "bg-teal-400" },
  { label: "Open Work Orders", value: "12", sublabel: "This Week", progress: 45, color: "bg-brand-blue" },
  { label: "Preventive Maintenance", value: "85%", sublabel: "On Schedule", progress: 85, color: "bg-teal-400" },
  { label: "Energy Efficiency", value: "92%", sublabel: "Optimized", progress: 92, color: "bg-teal-400" },
];

const maintenanceTasks = [
  { id: 1, icon: FiWind, task: "HVAC System Check", time: "Today, 09:00 AM", status: "In Progress", statusStyle: "bg-brand-blue text-white" },
  { id: 2, icon: FiZap, task: "Electrical Panel Inspection", time: "Today, 11:15 AM", status: "Pending", statusStyle: "text-amber-400" },
  { id: 3, icon: FiDroplet, task: "Plumbing System Check", time: "Tomorrow, 08:30 AM", status: "Scheduled", statusStyle: "bg-slate-700 text-slate-200" },
];

const securityItems = [
  { label: "CCTV Cameras", count: "64", status: "Online" },
  { label: "Security Personnel", count: "32", status: "On Duty" },
  { label: "Access Points", count: "18", status: "Active" },
];

const buildingFloors = [
  { floor: "Floor 12", occupancy: "92%", hvac: "Optimal", power: "1.2 MW", status: "Normal" },
  { floor: "Floor 8", occupancy: "78%", hvac: "Cooling", power: "0.9 MW", status: "Normal" },
  { floor: "Floor 4", occupancy: "65%", hvac: "Maintenance", power: "0.6 MW", status: "Alert" },
  { floor: "Ground", occupancy: "100%", hvac: "Optimal", power: "1.5 MW", status: "Normal" },
];

const buildingSystems = [
  { icon: FiWind, name: "HVAC", status: "Running", load: "72%" },
  { icon: FiZap, name: "Electrical", status: "Stable", load: "68%" },
  { icon: FiDroplet, name: "Plumbing", status: "Normal", load: "45%" },
  { icon: FiShield, name: "Fire Safety", status: "Active", load: "100%" },
];

const teamMembers = [
  { name: "Ahmed Hassan", role: "Facility Manager", status: "On Duty", avatar: "AH" },
  { name: "Sarah Khan", role: "HVAC Technician", status: "On Site", avatar: "SK" },
  { name: "Raj Patel", role: "Security Lead", status: "On Duty", avatar: "RP" },
  { name: "Omar Ali", role: "Maintenance Engineer", status: "Off Duty", avatar: "OA" },
];

const userStats = [
  { label: "Total Staff", value: "48" },
  { label: "On Duty Now", value: "32" },
  { label: "On Site", value: "18" },
  { label: "Available", value: "16" },
];

const settingsGroups = [
  {
    title: "Notifications",
    items: [
      { id: "alerts", label: "Critical Alerts", icon: FiBell, enabled: true },
      { id: "maintenance", label: "Maintenance Reminders", icon: FiActivity, enabled: true },
      { id: "security", label: "Security Alerts", icon: FiShield, enabled: false },
    ],
  },
  {
    title: "Display",
    items: [
      { id: "dark", label: "Dark Mode", icon: FiMoon, enabled: true },
      { id: "energy", label: "Energy Dashboard", icon: FiSun, enabled: true },
    ],
  },
];

type NavId = "dashboard" | "building" | "users" | "settings";

function PanelCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-[#161b2b] border border-slate-800 rounded-xl p-4 ${className}`}>
      {children}
    </div>
  );
}

function ProgressBar({ progress, color }: { progress: number; color: string }) {
  return (
    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`h-full rounded-full ${color}`}
      />
    </div>
  );
}

function DashboardView({
  activeStat,
  setActiveStat,
  selectedTask,
  setSelectedTask,
  hoveredSecurity,
  setHoveredSecurity,
}: {
  activeStat: string | null;
  setActiveStat: (v: string | null) => void;
  selectedTask: number | null;
  setSelectedTask: (v: number | null) => void;
  hoveredSecurity: string | null;
  setHoveredSecurity: (v: string | null) => void;
}) {
  return (
    <>
      <h3 className="text-lg lg:text-xl font-bold text-white mb-5">Facility Dashboard</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        {dashboardStats.map((stat) => (
          <motion.button
            key={stat.label}
            type="button"
            onClick={() => setActiveStat(activeStat === stat.label ? null : stat.label)}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`text-left bg-[#161b2b] border rounded-xl p-4 transition-colors duration-300 ${
              activeStat === stat.label ? "border-brand-blue shadow-lg shadow-brand-blue/20" : "border-slate-800 hover:border-slate-600"
            }`}
          >
            <p className="text-2xl font-bold text-white mb-0.5">{stat.value}</p>
            <p className={`text-xs font-medium mb-3 ${stat.color === "bg-brand-blue" ? "text-brand-blue" : "text-teal-400"}`}>{stat.sublabel}</p>
            <p className="text-[10px] text-slate-500 mb-2">{stat.label}</p>
            <ProgressBar progress={stat.progress} color={stat.color} />
          </motion.button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <PanelCard>
          <h4 className="text-sm font-semibold text-white mb-4">Maintenance Schedule</h4>
          <div className="space-y-3">
            {maintenanceTasks.map((item) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setSelectedTask(selectedTask === item.id ? null : item.id)}
                whileHover={{ x: 4 }}
                className={`w-full flex items-start gap-3 text-left p-2 rounded-lg transition-colors ${
                  selectedTask === item.id ? "bg-brand-blue/10 border border-brand-blue/30" : "hover:bg-slate-800/50"
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-brand-blue" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-white truncate">{item.task}</p>
                  <p className="text-[10px] text-slate-500">{item.time}</p>
                </div>
                <span className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-medium ${item.statusStyle}`}>{item.status}</span>
              </motion.button>
            ))}
          </div>
        </PanelCard>
        <PanelCard>
          <h4 className="text-sm font-semibold text-white mb-4">Security Overview</h4>
          <div className="space-y-0">
            {securityItems.map((item, i) => (
              <motion.div
                key={item.label}
                onHoverStart={() => setHoveredSecurity(item.label)}
                onHoverEnd={() => setHoveredSecurity(null)}
                className={`flex items-center justify-between py-3 text-xs ${i !== securityItems.length - 1 ? "border-b border-slate-800" : ""}`}
              >
                <span className="text-slate-400">{item.label}</span>
                <span className="font-bold text-white">{item.count}</span>
                <motion.span animate={{ scale: hoveredSecurity === item.label ? 1.05 : 1 }} className="text-teal-400 font-medium">{item.status}</motion.span>
              </motion.div>
            ))}
          </div>
        </PanelCard>
      </div>
    </>
  );
}

function BuildingView({ selectedFloor, setSelectedFloor }: { selectedFloor: string | null; setSelectedFloor: (v: string | null) => void }) {
  return (
    <>
      <h3 className="text-lg lg:text-xl font-bold text-white mb-1">Building Overview</h3>
      <p className="text-xs text-slate-500 mb-5">Exchange Tower · Dubai · 12 Floors</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        {buildingSystems.map((sys) => (
          <motion.div key={sys.name} whileHover={{ y: -2 }} className="bg-[#161b2b] border border-slate-800 rounded-xl p-3 hover:border-brand-blue/40 transition-colors">
            <sys.icon className="w-5 h-5 text-brand-blue mb-2" />
            <p className="text-xs font-semibold text-white">{sys.name}</p>
            <p className="text-[10px] text-teal-400">{sys.status}</p>
            <div className="mt-2"><ProgressBar progress={parseInt(sys.load)} color="bg-teal-400" /></div>
          </motion.div>
        ))}
      </div>

      <PanelCard>
        <h4 className="text-sm font-semibold text-white mb-4">Floor Status</h4>
        <div className="space-y-2">
          {buildingFloors.map((floor) => (
            <motion.button
              key={floor.floor}
              type="button"
              onClick={() => setSelectedFloor(selectedFloor === floor.floor ? null : floor.floor)}
              whileHover={{ x: 4 }}
              className={`w-full grid grid-cols-4 gap-2 text-left p-2.5 rounded-lg text-xs transition-colors ${
                selectedFloor === floor.floor ? "bg-brand-blue/10 border border-brand-blue/30" : "hover:bg-slate-800/50"
              }`}
            >
              <span className="font-medium text-white">{floor.floor}</span>
              <span className="text-slate-400">{floor.occupancy}</span>
              <span className="text-slate-400">{floor.hvac}</span>
              <span className={floor.status === "Alert" ? "text-amber-400" : "text-teal-400"}>{floor.status}</span>
            </motion.button>
          ))}
        </div>
        {selectedFloor && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-[10px] text-brand-blue">
            {selectedFloor} selected · Power load: {buildingFloors.find((f) => f.floor === selectedFloor)?.power}
          </motion.p>
        )}
      </PanelCard>
    </>
  );
}

function UsersView({ selectedUser, setSelectedUser }: { selectedUser: string | null; setSelectedUser: (v: string | null) => void }) {
  return (
    <>
      <h3 className="text-lg lg:text-xl font-bold text-white mb-5">Team Management</h3>

      <div className="grid grid-cols-4 gap-3 mb-4">
        {userStats.map((stat) => (
          <div key={stat.label} className="bg-[#161b2b] border border-slate-800 rounded-xl p-3 text-center">
            <p className="text-xl font-bold text-white">{stat.value}</p>
            <p className="text-[10px] text-slate-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <PanelCard>
        <h4 className="text-sm font-semibold text-white mb-4">Staff Directory</h4>
        <div className="space-y-2">
          {teamMembers.map((member) => (
            <motion.button
              key={member.name}
              type="button"
              onClick={() => setSelectedUser(selectedUser === member.name ? null : member.name)}
              whileHover={{ x: 4 }}
              className={`w-full flex items-center gap-3 p-2 rounded-lg text-left transition-colors ${
                selectedUser === member.name ? "bg-brand-blue/10 border border-brand-blue/30" : "hover:bg-slate-800/50"
              }`}
            >
              <div className="w-9 h-9 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-xs font-bold text-brand-blue shrink-0">
                {member.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-white">{member.name}</p>
                <p className="text-[10px] text-slate-500">{member.role}</p>
              </div>
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                member.status === "Off Duty" ? "text-slate-500" : "text-teal-400 bg-teal-400/10"
              }`}>
                {member.status}
              </span>
            </motion.button>
          ))}
        </div>
        {selectedUser && (
          <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
            <p className="text-xs text-white font-medium">{selectedUser}</p>
            <p className="text-[10px] text-slate-400 mt-1">
              {teamMembers.find((m) => m.name === selectedUser)?.role} · Last check-in: 08:45 AM
            </p>
          </motion.div>
        )}
      </PanelCard>
    </>
  );
}

function SettingsView({ toggles, setToggles }: { toggles: Record<string, boolean>; setToggles: React.Dispatch<React.SetStateAction<Record<string, boolean>>> }) {
  return (
    <>
      <h3 className="text-lg lg:text-xl font-bold text-white mb-5">System Settings</h3>

      <div className="space-y-4">
        {settingsGroups.map((group) => (
          <PanelCard key={group.title}>
            <h4 className="text-sm font-semibold text-white mb-4">{group.title}</h4>
            <div className="space-y-3">
              {group.items.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-brand-blue" />
                    <span className="text-xs text-slate-300">{item.label}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setToggles((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
                    className={`relative w-10 h-5 rounded-full transition-colors duration-300 ${
                      toggles[item.id] ? "bg-brand-blue" : "bg-slate-700"
                    }`}
                  >
                    <motion.span
                      animate={{ x: toggles[item.id] ? 20 : 2 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow"
                    />
                  </button>
                </div>
              ))}
            </div>
          </PanelCard>
        ))}

        <PanelCard>
          <h4 className="text-sm font-semibold text-white mb-3">System Info</h4>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div><p className="text-slate-500">Version</p><p className="text-white font-medium">v2.4.1</p></div>
            <div><p className="text-slate-500">Last Sync</p><p className="text-teal-400 font-medium">2 min ago</p></div>
            <div><p className="text-slate-500">Uptime</p><p className="text-white font-medium">99.8%</p></div>
            <div><p className="text-slate-500">Region</p><p className="text-white font-medium">UAE · Dubai</p></div>
          </div>
        </PanelCard>
      </div>
    </>
  );
}

function FacilityDashboard() {
  const [activeNav, setActiveNav] = useState<NavId>("dashboard");
  const [activeStat, setActiveStat] = useState<string | null>(null);
  const [selectedTask, setSelectedTask] = useState<number | null>(1);
  const [hoveredSecurity, setHoveredSecurity] = useState<string | null>(null);
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    alerts: true,
    maintenance: true,
    security: false,
    dark: true,
    energy: true,
  });

  const renderView = () => {
    switch (activeNav) {
      case "building":
        return <BuildingView selectedFloor={selectedFloor} setSelectedFloor={setSelectedFloor} />;
      case "users":
        return <UsersView selectedUser={selectedUser} setSelectedUser={setSelectedUser} />;
      case "settings":
        return <SettingsView toggles={toggles} setToggles={setToggles} />;
      default:
        return (
          <DashboardView
            activeStat={activeStat}
            setActiveStat={setActiveStat}
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
            hoveredSecurity={hoveredSecurity}
            setHoveredSecurity={setHoveredSecurity}
          />
        );
    }
  };

  return (
    <div className="flex bg-[#0a0e1a] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl min-h-[520px]">
      <aside className="w-14 lg:w-16 shrink-0 bg-[#080c16] border-r border-slate-800 flex flex-col items-center py-5 gap-6">
        <div className="w-9 h-9 rounded-lg bg-brand-blue/20 flex items-center justify-center">
          <FiHome className="w-5 h-5 text-brand-blue" />
        </div>
        <nav className="flex flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-label={item.label}
              onClick={() => setActiveNav(item.id as NavId)}
              className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group ${
                activeNav === item.id
                  ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/30"
                  : "text-slate-500 hover:text-brand-blue hover:bg-brand-blue/10"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="absolute left-full ml-3 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity z-20">
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      <div className="flex-1 p-5 lg:p-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNav}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function DashboardSection() {
  return (
    <section className="py-4 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy" />

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-20">
          <ScrollReveal y={48}>
            <span className="section-label text-blue-400">Integrated Facilities Management</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight font-display">
              One System. <br /> One Partner. <br />
              <span className="text-brand-blue">Total Control.</span>
            </h2>
            <div className="w-12 h-1 bg-accent-warm mb-6" />
            <p className="text-slate-300 leading-relaxed mb-8">
              Our integrated facilities management platform gives you complete visibility and control over every aspect of your building operations from maintenance scheduling to security monitoring.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <FiCheckCircle className="w-5 h-5 text-brand-blue shrink-0" />
                  <span className="text-sm text-slate-200">{feature}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal x={60} y={0} delay={0.15}>
            <FacilityDashboard />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
