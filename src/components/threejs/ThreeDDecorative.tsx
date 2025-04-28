import { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float} from '@react-three/drei';
import { MathUtils, Group } from 'three';
import { motion } from "framer-motion";

// Pen model with metallic finish and subtle reflections - purely programmatic
function PenModel({ position = [0, 0, 0], rotation = [0, 0, 0], hovered, isDarkMode = false }: any) {
  const penRef = useRef<Group>(null);
  const [hover, setHover] = useState(false);
  const [rotationOffset] = useState(Math.random() * Math.PI);
  
  // Pen measurements - refined for premium look
  const penLength = 6.8; // Total length of pen
  const upperBodyRadius = 0.35; // Broader upper body
  const lowerBodyRadius = 0.20; // Thinner lower body
  const nibLength = 1.2; // Slightly longer for Parker style
  const nibWidthBase = 0.16; // Width at the base
  const nibWidthTip = 0.01; // Extra small tip for sharp appearance
  const nibThickness = 0.04; // Thinner for more elegance
  
  // Colors based on theme
  const penBodyColor = isDarkMode ? "#ffffff" : "#222222";
  const penGripColor = isDarkMode ? "#f0f0f0" : "#333333";
  // For feed channel and other non-gold parts
  const feedColor = isDarkMode ? "#f0f0f0" : "#111111";
  const detailColor = isDarkMode ? "#e0e0e0" : "#111111";
  
  // Respond to hover state changes
  useEffect(() => {
    if (hovered) setHover(true);
    else setHover(false);
  }, [hovered]);
  
  // Animation parameters stored as refs to prevent re-renders - increased rotation speed
  const animationRef = useRef({
    rotationSpeed: 0.45, // Increased from 0.3 for faster rotation
    oscillationSpeed: 0.7,
    oscillationAmplitude: 0.12,
    currentScale: 0.65,
    targetScale: 0.65,
    lastTime: 0,
    rotationY: rotationOffset
  });
  
  // Animate the pen with continuous rotation and floating effects
  useFrame((state) => {
    if (penRef.current) {
      const { clock } = state;
      const time = clock.getElapsedTime();
      const deltaTime = Math.min(0.05, time - animationRef.current.lastTime);
      animationRef.current.lastTime = time;
      
      // Ensure continuous rotation by updating rotation angle
      animationRef.current.rotationY += animationRef.current.rotationSpeed * deltaTime;
      penRef.current.rotation.y = animationRef.current.rotationY;
      
      // Continuous oscillation for X rotation and Y position
      const oscillation = Math.sin(time * animationRef.current.oscillationSpeed) * animationRef.current.oscillationAmplitude;
      penRef.current.rotation.x = oscillation + 0.2;
      penRef.current.position.y = oscillation * 0.5 + (hover ? 0.1 : 0);
      
      // Smoother scale interpolation
      animationRef.current.targetScale = hover ? 0.65 : 0.6; // Reduced from 0.7 : 0.65
      animationRef.current.currentScale = MathUtils.lerp(
        animationRef.current.currentScale, 
        animationRef.current.targetScale, 
        0.05
      );
      
      penRef.current.scale.setScalar(animationRef.current.currentScale);
      
      // Gentle wobble to add life to the animation
      penRef.current.rotation.z = Math.sin(time * 0.3) * 0.05;
    }
  });

  // Upper part of the pen body (cap area) - broader and elegant
  const penCap = useMemo(() => (
    <group position={[0, penLength/4, 0]}>
      {/* Main cap body - broader with gentle taper */}
      <mesh castShadow>
        <cylinderGeometry args={[upperBodyRadius, upperBodyRadius * 0.95, penLength/2, 24]} />
        <meshStandardMaterial 
          color={penBodyColor} // Changes based on theme
          roughness={isDarkMode ? 0.15 : 0.2} 
          metalness={isDarkMode ? 0.7 : 0.8} 
          transparent 
          opacity={1}
          alphaTest={0.01}
        />
      </mesh>
      
      {/* Cap top - slight dome for elegance */}
      <mesh position={[0, penLength/4 + 0.05, 0]}>
        <sphereGeometry args={[upperBodyRadius, 24, 24, 0, Math.PI * 2, 0, Math.PI/2]} />
        <meshStandardMaterial
          color={penBodyColor} // Changes based on theme
          roughness={isDarkMode ? 0.15 : 0.2}
          metalness={isDarkMode ? 0.7 : 0.8}
        />
      </mesh>
      
      {/* Decorative cap ring for premium look */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[upperBodyRadius * 1.05, 0.03, 16, 32]} />
        <meshStandardMaterial 
          color="#D4AF37" // Gold trim stays the same
          roughness={0.1}
          metalness={0.95}
        />
      </mesh>
      
      {/* Cap end detail - gold finial */}
      <mesh position={[0, penLength/4 + 0.1, 0]}>
        <sphereGeometry args={[upperBodyRadius * 0.6, 24, 24]} />
        <meshStandardMaterial
          color="#D4AF37" // Gold for premium look stays the same
          roughness={0.1}
          metalness={0.95}
        />
      </mesh>
    </group>
  ), [upperBodyRadius, penLength, penBodyColor, isDarkMode]);
  
  // Middle connector section - tapered transition
  const penConnector = useMemo(() => (
    <group position={[0, 0, 0]}>
      {/* Tapered connector from upper to lower body */}
      <mesh castShadow>
        <cylinderGeometry args={[upperBodyRadius * 0.95, lowerBodyRadius * 1.1, penLength/10, 24]} />
        <meshStandardMaterial 
          color="#D4AF37" // Gold for premium accent stays the same
          roughness={0.1}
          metalness={0.95}
        />
      </mesh>
    </group>
  ), [upperBodyRadius, lowerBodyRadius, penLength]);
  
  // Lower part of the pen body (grip section) - slimmer and elegant
  const penLowerBody = useMemo(() => (
    <group position={[0, -penLength/4, 0]}>
      {/* Main lower body - slimmer with gentle taper towards nib */}
      <mesh castShadow>
        <cylinderGeometry args={[lowerBodyRadius * 1.1, lowerBodyRadius * 0.9, penLength/2.5, 24]} />
        <meshStandardMaterial 
          color={penBodyColor} // Changes based on theme
          roughness={isDarkMode ? 0.15 : 0.2} 
          metalness={isDarkMode ? 0.7 : 0.8} 
          transparent 
          opacity={1}
          alphaTest={0.01}
        />
      </mesh>
      
      {/* Grip section texture - subtle rings for grip */}
      {[-0.3, -0.5, -0.7, -0.9].map((pos, i) => (
        <mesh key={`grip-${i}`} position={[0, pos, 0]}>
          <torusGeometry args={[lowerBodyRadius, 0.01, 12, 32]} />
          <meshStandardMaterial 
            color={penGripColor} // Changes based on theme
            roughness={0.6}
            metalness={0.4}
          />
        </mesh>
      ))}
    </group>
  ), [lowerBodyRadius, penLength, penBodyColor, penGripColor, isDarkMode]);
  
  // Pen clip (attached to cap)
  const penClip = useMemo(() => (
    <group position={[0, penLength/4 - 0.2, 0]}>
      <mesh position={[0, 0, upperBodyRadius * 1.1]}>
        {/* Clip base - thicker part attached to cap */}
        <mesh position={[0, 0.8, 0]}>
          <boxGeometry args={[0.12, 0.1, 0.05]} />
          <meshStandardMaterial 
            color="#D4AF37" // Gold trim stays the same
            roughness={0.1}
            metalness={0.95}
          />
        </mesh>
        
        {/* Main clip body - slightly curved */}
        <mesh position={[0, 0.4, 0.02]}>
          <boxGeometry args={[0.1, 1.6, 0.04]} />
          <meshStandardMaterial 
            color="#D4AF37" // Gold trim stays the same
            roughness={0.1}
            metalness={0.95}
          />
        </mesh>
        
        {/* Clip end - slight ball for premium look */}
        <mesh position={[0, -0.4, 0.04]}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshStandardMaterial 
            color="#D4AF37" // Gold trim stays the same
            roughness={0.1}
            metalness={0.95}
          />
        </mesh>
      </mesh>
    </group>
  ), [upperBodyRadius, penLength]);

  return (
    <group
      ref={penRef}
      position={position as [number, number, number]}
      rotation={rotation as [number, number, number]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={[0.65, 0.65, 0.65]}
    >
      <group rotation={[Math.PI / 4, 0, 0]}>
        {/* Premium Pen Components */}
        {penCap}
        {penConnector}
        {penLowerBody}
        {penClip}
        
        {/* Realistic Parker Style Fountain Pen Nib */}
        <group position={[0, -penLength/2 + 0.2, 0]}>
          {/* Premium Parker Feed Channel - The part behind the nib */}
          <mesh castShadow position={[0, nibLength * 0.3, -nibThickness * 0.6]}>
            <boxGeometry args={[nibWidthBase * 0.85, nibLength * 0.7, nibThickness * 0.8]} />
            <meshStandardMaterial 
              color={feedColor} 
              roughness={0.7}
              metalness={0.4}
            />
          </mesh>
          
          {/* Main Nib Body - Tapered Parker style */}
          <group>
            {/* Base part connection to feed - now white in dark mode */}
            <mesh castShadow position={[0, nibLength * 0.4, 0]}>
              <boxGeometry args={[nibWidthBase, nibLength * 0.2, nibThickness]} />
              <meshStandardMaterial 
                color={isDarkMode ? "#ffffff" : "#D4AF37"} 
                roughness={0.1}
                metalness={0.95}
                envMapIntensity={1.5}
              />
            </mesh>
            
            {/* Middle part of nib - now white in dark mode */}
            <mesh castShadow position={[0, nibLength * 0.15, 0]}>
              <boxGeometry args={[nibWidthBase * 0.85, nibLength * 0.35, nibThickness]} />
              <meshStandardMaterial 
                color={isDarkMode ? "#ffffff" : "#D4AF37"}
                roughness={0.1}
                metalness={0.95}
                envMapIntensity={1.5}
              />
            </mesh>
            
            {/* Long tapered section - now white in dark mode */}
            <mesh castShadow position={[0, -nibLength * 0.15, 0]}>
              <boxGeometry args={[nibWidthBase * 0.7, nibLength * 0.3, nibThickness]} />
              <meshStandardMaterial 
                color={isDarkMode ? "#ffffff" : "#D4AF37"} 
                roughness={0.1}
                metalness={0.95}
                envMapIntensity={1.5}
              />
            </mesh>
            
            {/* Sharp tip section - keep gold in both modes */}
            <mesh castShadow position={[0, -nibLength * 0.38, 0]}>
              <boxGeometry args={[nibWidthBase * 0.4, nibLength * 0.25, nibThickness * 0.9]} />
              <meshStandardMaterial 
                color="#D4AF37" // Stays gold
                roughness={0.05}
                metalness={0.98}
                envMapIntensity={1.7}
              />
            </mesh>
            
            {/* Ultra sharp point tip - stays gold */}
            <mesh castShadow position={[0, -nibLength * 0.48, 0]} rotation={[Math.PI/2, 0, 0]}>
              <cylinderGeometry 
                args={[nibWidthTip, nibWidthBase * 0.2, nibLength * 0.1, 6]} 
              />
              <meshStandardMaterial 
                color="#D4AF37" // Stays gold
                roughness={0.05}
                metalness={0.98}
                envMapIntensity={1.8}
              />
            </mesh>
          </group>
          
          {/* Nib Slit - thinner and more precise */}
          <mesh position={[0, -nibLength * 0.1, 0]}>
            <boxGeometry args={[nibWidthTip * 1.5, nibLength * 0.8, nibThickness * 1.1]} />
            <meshStandardMaterial 
              color="#000000"
              roughness={0.1}
              metalness={0.3}
            />
          </mesh>
          
          {/* Classic Parker Breather Hole (heart-shaped approximation) */}
          <group position={[0, nibLength * 0.2, 0]}>
            <mesh rotation={[Math.PI/2, 0, Math.PI/4]} position={[0.015, 0, 0]}>
              <cylinderGeometry args={[nibWidthTip/2, nibWidthTip/2, nibThickness * 1.2, 12]} />
              <meshStandardMaterial color="#000000" roughness={0.1} metalness={0.2} />
            </mesh>
            <mesh rotation={[Math.PI/2, 0, -Math.PI/4]} position={[-0.015, 0, 0]}>
              <cylinderGeometry args={[nibWidthTip/2, nibWidthTip/2, nibThickness * 1.2, 12]} />
              <meshStandardMaterial color="#000000" roughness={0.1} metalness={0.2} />
            </mesh>
          </group>
          
          {/* Parker logo/brand marking (simplified) */}
          <mesh position={[0, nibLength * 0.3, nibThickness/2 + 0.001]}>
            <planeGeometry args={[nibWidthBase * 0.5, nibLength * 0.1]} />
            <meshStandardMaterial 
              color={detailColor}
              roughness={0.3}
              metalness={0.6}
              transparent
              opacity={0.8}
              side={2}
            />
          </mesh>
          
          {/* Slight curvature details for realistic shape */}
          <mesh position={[0, 0, nibThickness * 0.5]}>
            <sphereGeometry args={[nibWidthBase * 0.3, 4, 4, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
            <meshStandardMaterial 
              color={isDarkMode ? "#ffffff" : "#D4AF37"}
              roughness={0.1}
              metalness={0.95}
              transparent
              opacity={0.4}
            />
          </mesh>
          
          {/* Fine surface detail engravings (simulated with very thin boxes) */}
          <mesh position={[nibWidthBase * 0.25, nibLength * 0.25, nibThickness/2 + 0.001]}>
            <boxGeometry args={[nibWidthTip/2, nibLength * 0.2, 0.001]} />
            <meshStandardMaterial 
              color={isDarkMode ? "#e5e5e5" : "#A67C00"}
              roughness={0.3}
              metalness={0.6}
              transparent
              opacity={0.7}
            />
          </mesh>
          <mesh position={[-nibWidthBase * 0.25, nibLength * 0.25, nibThickness/2 + 0.001]}>
            <boxGeometry args={[nibWidthTip/2, nibLength * 0.2, 0.001]} />
            <meshStandardMaterial 
              color={isDarkMode ? "#e5e5e5" : "#A67C00"}
              roughness={0.3}
              metalness={0.6}
              transparent
              opacity={0.7}
            />
          </mesh>
        </group>
        
        {/* Nib section connection ring */}
        <mesh position={[0, -penLength/2.8, 0]}>
          <torusGeometry args={[lowerBodyRadius * 1.05, 0.02, 16, 32]} />
          <meshStandardMaterial 
            color={isDarkMode ? "#ffffff" : "#D4AF37"}
            roughness={0.1}
            metalness={0.95}
          />
        </mesh>
      </group>
    </group>
  );
}

// Pen scene with specialized settings for transparency
function PenScene() {
  // Detect dark mode using CSS media query
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check if dark mode is active initially
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeQuery.matches || document.documentElement.classList.contains('dark'));
    
    // Create a function to check for .dark class changes (for theme toggles)
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    // Listen for system preference changes
    const darkModeListener = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches || document.documentElement.classList.contains('dark'));
    };
    
    // Set up MutationObserver to detect class changes on html element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          checkDarkMode();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    darkModeQuery.addEventListener('change', darkModeListener);
    
    // Check periodically for theme changes (fallback)
    const intervalId = setInterval(checkDarkMode, 1000);
    
    return () => {
      darkModeQuery.removeEventListener('change', darkModeListener);
      observer.disconnect();
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Canvas
      shadows={false}
      camera={{ position: [0, 0, 7], fov: 50 }}
      gl={{ 
        alpha: true, 
        antialias: true, 
        premultipliedAlpha: false,
        preserveDrawingBuffer: false,
        depth: true,
        powerPreference: 'high-performance'
      }}
      style={{ 
        background: 'transparent',
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        position: 'absolute',
        inset: 0,
        zIndex: 10,
        display: 'block',
        WebkitBackdropFilter: 'none',
        backdropFilter: 'none'
      }}
      dpr={[1, 1.5]} // Limit DPR for better performance
      frameloop="always" // Changed to always to ensure continuous animation
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Float 
        speed={3} // Increased from 1.5 for faster animation
        rotationIntensity={0.9} // Increased from 0.6 for more pronounced rotation
        floatIntensity={0.4} // Increased from 0.6 for more pronounced floating
        floatingRange={[-0.12, 0.12]} // Wider range for more movement
      >
        <PenModel rotation={[0.5, 0, 0]} isDarkMode={isDarkMode} />
      </Float>
    </Canvas>
  );
}

// Main component for Three.js elements
export default function ThreeDDecorative({ type = 'pen', className }: { type?: string, className?: string }) {
  // Check if we're in a browser environment
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) return null; // Prevents SSR errors
  
  // Style for consistent container
  const containerStyle = {
    position: 'relative' as const,
    width: '100%',
    height: '100%',
    background: 'transparent',
    overflow: 'visible'
  };
  
  // Conditionally render different scenes based on type
  // Currently only 'pen' is implemented
  const renderScene = () => {
    if (type === 'pen') {
      return <PenScene />;
    }
    // Future types could be added here
    return <PenScene />;
  };
  
  return (
    <motion.div 
      className={`${className}`}
      style={containerStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      data-type={type} // Use type as a data attribute
    >
      {renderScene()}
    </motion.div>
  );
}