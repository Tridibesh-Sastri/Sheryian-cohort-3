import React from "react";
import ProductCard from "./ProductCard";
import Counter from '../components/tasks/Counter'
import NameChanger from '../components/tasks/NameChanger'

import {useState} from "react";

const Hero = (props) => {
  const [productData, setProducts] = React.useState([
    {
      id: "prod_01",
      name: "Chronos Apex Smartwatch",
      category: "Wearables",
      price: 149,
      rating: 4.5,
      themeColor: "#00E5FF",
      glowColor: "rgba(0, 229, 255, 0.45)",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
      summary:
        "Precision biometric tracking with an ultra-bright AMOLED display.",
      specs: [
        { title: "Display", desc: '1.78" Ultra Retina AMOLED, 1000 nits' },
        { title: "Battery", desc: "Up to 14 days typical usage" },
        { title: "Sensors", desc: "Continuous SpO2, ECG & PPG optical" },
      ],
    },
    {
      id: "prod_02",
      name: "AuraWave ANC Headphones",
      category: "Audio",
      price: 199,
      rating: 4.8,
      themeColor: "#E040FB",
      glowColor: "rgba(224, 64, 251, 0.45)",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
      summary:
        "Studio-grade acoustic tuning with hybrid active noise cancellation.",
      specs: [
        { title: "Acoustics", desc: "40mm custom graphene drivers" },
        { title: "Noise Control", desc: "-42dB hybrid adaptive ANC" },
        { title: "Playtime", desc: "55 hours with quick charge" },
      ],
    },
    {
      id: "prod_03",
      name: "Vortex Pro Wireless Controller",
      category: "Gaming",
      price: 89,
      rating: 4.7,
      themeColor: "#FF6D00",
      glowColor: "rgba(255, 109, 0, 0.45)",
      image:
        "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=600&q=80",
      summary:
        "Zero-drift Hall effect triggers engineered for competitive play.",
      specs: [
        { title: "Latency", desc: "1ms ultra-low 2.4GHz wireless" },
        { title: "Hardware", desc: "Hall effect magnetic analog sticks" },
        { title: "Feedback", desc: "Dual haptic linear rumble motors" },
      ],
    },
    {
      id: "prod_04",
      name: "HyperBeam Mini Projector",
      category: "Home Cinema",
      price: 279,
      rating: 4.3,
      themeColor: "#76FF03",
      glowColor: "rgba(118, 255, 3, 0.45)",
      image:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&q=80",
      summary:
        "Pocket-sized laser clarity projecting up to a 150-inch 4K frame.",
      specs: [
        { title: "Resolution", desc: "Native 1080p with 4K HDR10 decode" },
        { title: "Luminance", desc: "850 ANSI lumens laser engine" },
        { title: "Focus", desc: "Auto-keystone & instant laser focus" },
      ],
    },
    {
      id: "prod_05",
      name: "PulseBuds Pro TWS",
      category: "Audio",
      price: 119,
      rating: 4.6,
      themeColor: "#00E676",
      glowColor: "rgba(0, 230, 118, 0.45)",
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80",
      summary:
        "True spatial audio immersion with low-latency gaming pass-through.",
      specs: [
        { title: "Latency", desc: "38ms ultra-low latency mode" },
        { title: "Drivers", desc: "11mm dynamic dual-chamber" },
        { title: "Protection", desc: "IPX7 waterproof nano-coating" },
      ],
    },
    {
      id: "prod_06",
      name: "TitanKey 75 Mechanical Keyboard",
      category: "Peripherals",
      price: 139,
      rating: 4.9,
      themeColor: "#D500F9",
      glowColor: "rgba(213, 0, 249, 0.45)",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80",
      summary:
        "Gasket-mounted mechanical build with hot-swappable tactile switches.",
      specs: [
        { title: "Mounting", desc: "PORON gasket dampening system" },
        { title: "Polling", desc: "8000Hz wired / 1000Hz wireless" },
        { title: "Keycaps", desc: "Dye-sublimated PBT cherry profile" },
      ],
    },
    {
      id: "prod_07",
      name: "SpectraGlide Ultralight Mouse",
      category: "Peripherals",
      price: 79,
      rating: 4.4,
      themeColor: "#FF3D00",
      glowColor: "rgba(255, 61, 0, 0.45)",
      image:
        "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&q=80",
      summary:
        "Sub-49g honeycomb chassis paired with a 26K DPI optical sensor.",
      specs: [
        { title: "Sensor", desc: "PAW3395 26,000 DPI optical" },
        { title: "Weight", desc: "49g featherweight ergonomic shell" },
        { title: "Switches", desc: "Optical micro-switches (90M clicks)" },
      ],
    },
    {
      id: "prod_08",
      name: "LuminaSound 360 Speaker",
      category: "Audio",
      price: 129,
      rating: 4.5,
      themeColor: "#2979FF",
      glowColor: "rgba(41, 121, 255, 0.45)",
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&q=80",
      summary:
        "Omnidirectional room-filling audio synced with reactive ambient RGB.",
      specs: [
        { title: "Output", desc: "45W RMS 360° omni-radiator" },
        { title: "Lighting", desc: "Sound-reactive RGB spectrum halo" },
        { title: "Connectivity", desc: "Bluetooth 5.3 + Auracast broadcast" },
      ],
    },
    {
      id: "prod_09",
      name: "QuantumDrive 2TB Portable SSD",
      category: "Storage",
      price: 169,
      rating: 4.9,
      themeColor: "#00B0FF",
      glowColor: "rgba(0, 176, 255, 0.45)",
      image:
        "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80",
      summary:
        "Ruggedized aluminum storage delivering up to 2000MB/s transfer speeds.",
      specs: [
        { title: "Speed", desc: "Read/Write up to 2,050 MB/s" },
        { title: "Interface", desc: "USB 3.2 Gen 2x2 Type-C" },
        { title: "Durability", desc: "IP65 dust/water + 3m drop proof" },
      ],
    },
    {
      id: "prod_10",
      name: "Onyx Drone 4K Compact",
      category: "Robotics",
      price: 349,
      rating: 4.7,
      themeColor: "#FF1744",
      glowColor: "rgba(255, 23, 68, 0.45)",
      image:
        "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=600&q=80",
      summary:
        "Foldable quadcopter with 3-axis gimbal stabilization and obstacle avoidance.",
      specs: [
        { title: "Camera", desc: '4K/60fps HDR 1/2" CMOS sensor' },
        { title: "Flight Time", desc: "38 minutes per flight pack" },
        { title: "Transmission", desc: "10km 1080p live video feed" },
      ],
    },
    {
      id: "prod_11",
      name: "VoltStation 100W GaN Hub",
      category: "Power",
      price: 65,
      rating: 4.6,
      themeColor: "#FFD600",
      glowColor: "rgba(255, 214, 0, 0.45)",
      image:
        "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&q=80",
      summary:
        "Ultra-efficient Gallium Nitride multi-port fast charger for desktops.",
      specs: [
        { title: "Power Tech", desc: "GaN III semiconductor architecture" },
        { title: "Ports", desc: "3x USB-C PD 3.0 + 1x USB-A QC 4+" },
        { title: "Protection", desc: "Active heat and dynamic load monitor" },
      ],
    },
    {
      id: "prod_12",
      name: "AetherFit Smart Ring",
      category: "Wearables",
      price: 189,
      rating: 4.4,
      themeColor: "#00E5FF",
      glowColor: "rgba(0, 229, 255, 0.45)",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
      summary:
        "Titanium-crafted biometric tracker monitoring sleep stages and recovery score.",
      specs: [
        { title: "Material", desc: "Aerospace Grade 5 Titanium finish" },
        { title: "Battery", desc: "7-day continuous power reserve" },
        { title: "Telemetry", desc: "Skin temp, HRV & circadian rhythm" },
      ],
    },
    {
      id: "prod_13",
      name: "PrismDeck Stream Console",
      category: "Content Creation",
      price: 149,
      rating: 4.8,
      themeColor: "#AA00FF",
      glowColor: "rgba(170, 0, 255, 0.45)",
      image:
        "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=600&q=80",
      summary:
        "Customizable 15-key LCD interface for workflow and broadcast automation.",
      specs: [
        { title: "Keypad", desc: "15 interactive tactile LCD screens" },
        { title: "Integration", desc: "OBS, Premiere, Blender, Twitch" },
        { title: "Cable", desc: "Detachable braided USB-C" },
      ],
    },
    {
      id: "prod_14",
      name: "IrisVR Spatial Headset",
      category: "Virtual Reality",
      price: 499,
      rating: 4.6,
      themeColor: "#1DE9B6",
      glowColor: "rgba(29, 233, 182, 0.45)",
      image:
        "https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?w=600&q=80",
      summary:
        "Next-gen pancake optics with full-color passthrough mixed reality.",
      specs: [
        { title: "Optics", desc: "Dual 4K micro-OLED 120Hz panels" },
        { title: "Tracking", desc: "6 DoF inside-out spatial sensors" },
        { title: "Chipset", desc: "Dedicated AI spatial vision coprocessor" },
      ],
    },
    {
      id: "prod_15",
      name: "CyberShield Smart Lock",
      category: "Smart Home",
      price: 159,
      rating: 4.5,
      themeColor: "#FF5252",
      glowColor: "rgba(255, 82, 82, 0.45)",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
      summary:
        "Biometric 3D fingerprint recognition deadbolt with Zigbee remote control.",
      specs: [
        { title: "Access", desc: "Fingerprint, PIN, App & Physical key" },
        { title: "Speed", desc: "0.3s rapid biometric recognition" },
        { title: "Protocol", desc: "Matter over Thread & Zigbee 3.0" },
      ],
    },
    {
      id: "prod_16",
      name: "NovaCast Studio Microphone",
      category: "Audio",
      price: 119,
      rating: 4.7,
      themeColor: "#FF9100",
      glowColor: "rgba(255, 145, 0, 0.45)",
      image:
        "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80",
      summary:
        "Broadcasting USB/XLR dual-mode condenser mic with internal pop filter.",
      specs: [
        { title: "Capsule", desc: "25mm studio condenser cardioid" },
        { title: "Sample Rate", desc: "192kHz / 24-bit studio bitrate" },
        { title: "Interface", desc: "Direct XLR + plug-and-play USB-C" },
      ],
    },
    {
      id: "prod_17",
      name: "MagStack 3-in-1 Charging Mat",
      category: "Power",
      price: 69,
      rating: 4.3,
      themeColor: "#00B8D4",
      glowColor: "rgba(0, 184, 212, 0.45)",
      image:
        "https://images.unsplash.com/photo-1622445262464-84b1456045b6?w=600&q=80",
      summary:
        "Foldable magnetic wireless pad powering phone, watch, and earbuds simultaneously.",
      specs: [
        { title: "Standard", desc: "Qi2 certified 15W fast alignment" },
        { title: "Form Factor", desc: "Ultra-thin silicone hinge fold" },
        { title: "Capacity", desc: "Triple dedicated concurrent coils" },
      ],
    },
    {
      id: "prod_18",
      name: "ApexLink Wi-Fi 7 Mesh Router",
      category: "Networking",
      price: 229,
      rating: 4.8,
      themeColor: "#651FFF",
      glowColor: "rgba(101, 31, 255, 0.45)",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
      summary:
        "Tri-band BE9300 wireless router ensuring zero dead zones over 3,000 sq ft.",
      specs: [
        { title: "Throughput", desc: "Up to 9.3 Gbps combined Wi-Fi 7" },
        { title: "Bandwidth", desc: "320MHz wide-channel support" },
        { title: "Backhaul", desc: "2.5G Multi-Gig WAN/LAN ports" },
      ],
    },
    {
      id: "prod_19",
      name: "ThermalCore ARGB CPU Cooler",
      category: "PC Components",
      price: 109,
      rating: 4.7,
      themeColor: "#F50057",
      glowColor: "rgba(245, 0, 87, 0.45)",
      image:
        "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80",
      summary:
        "360mm closed-loop liquid cooler featuring a customizable pump IPS display.",
      specs: [
        { title: "Radiator", desc: "360mm high-density aluminum fin" },
        { title: "Display", desc: '2.1" LCD pump head for live metrics' },
        { title: "Noise Level", desc: "<28 dBA at maximum pump RPM" },
      ],
    },
    {
      id: "prod_20",
      name: "EchoMatrix Smart Light Bars",
      category: "Lighting",
      price: 89,
      rating: 4.5,
      themeColor: "#FFAB00",
      glowColor: "rgba(255, 171, 0, 0.45)",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
      summary:
        "Dual desktop light towers with real-time screen back-projection sync.",
      specs: [
        { title: "Sync Engine", desc: "Zero-latency HDMI/PC screen sync" },
        { title: "Color Gamut", desc: "16.8M RGBIC individual LED zones" },
        { title: "Mounting", desc: "Vertical desk stand or monitor-clip" },
      ],
    },
  ]);

  let productList = productData.map((product) => {
    return product.id + " - " + product.name;
  });
  console.log(productList);

  const deleteProduct = (id)=>{
    // console.log("Deleting product with id:", id);
    setProducts(productData.filter((product)=> product.id !== id));
  }

  let view = props.view;

  return <div className="flex flex-wrap gap-4 p-4 bg-[#d9f90c]">
    {
    // print product names in a list
    view == 'Products'&& productData.map((product) => {
      return (
        <ProductCard 
        key={product.id}
        id={product.id} 
        name={product.name} 
        image={product.image} 
        del = {deleteProduct} />
      );})

    }

    {view == 'Counter' && <Counter />}
    {view == 'Name Changer' && <NameChanger />}
    {view == 'Show / HideBox' && <div>Hi I'm Show / HideBox</div>}
    {view == 'Like Button' && <div>Hi I'm Like Button</div>}
    {view == 'Character Counter' && <div>Hi I'm Character Counter</div>}
    {view == 'Temperature Converter' && <div>Hi I'm Temperature Converter</div>}
    {view == 'Login' && <div>Hi I'm Login</div>}
    {view == 'Digital Toggle' && <div>Hi I'm Digital Toggle</div>}
    {view == 'Shopping Cart' && <div>Hi I'm Shopping Cart</div>}
  </div>;
};

export default Hero;
