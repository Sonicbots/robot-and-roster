export const robotDetails = [
  {
    slug: "drivetrain", title: "Drivetrain",
    summary: "Mecanum drive for full omnidirectional movement.",
    intro: "The drivetrain is the robot’s foundation: it moves the machine around the field and positions every other mechanism for scoring.",
    sections: [
      { title: "Moving around the field", text: "Mecanum wheels use angled rollers. By combining the direction and speed of four wheels, a robot can drive forward, strafe sideways and turn without first pointing in its direction of travel." },
      { title: "What matters in testing", text: "Wheel alignment, weight distribution and motor control all affect repeatability. Straight driving, sideways movement and turns should be tested with the robot carrying its normal mechanisms and game elements." },
    ],
  },
  {
    slug: "intake", title: "Intake",
    summary: "Fast active intake to grab game elements in one pass.",
    intro: "The intake is the spinning mechanism at the front of the robot. It collects game elements and brings them into the machine for the next stage of scoring.",
    sections: [
      { title: "Collecting game elements", text: "Powered rollers pull an element inward as the robot approaches it. Roller spacing, grip and speed influence how smoothly the element enters and whether it stays under control." },
      { title: "Making collection reliable", text: "Useful tests include approaching from different angles, collecting while moving and recovering from jams. Guides and a controlled transfer path help keep elements from bouncing out or getting stuck." },
    ],
  },
  {
    slug: "lift", title: "Lift",
    summary: "Linear slide system to reach the highest scoring zones.",
    intro: "A lift moves a mechanism vertically so a robot can reach scoring positions above its starting height. This overview explains the role of a linear-slide lift in FTC.",
    sections: [
      { title: "Reaching scoring height", text: "Linear slides guide an extending mechanism along a controlled path. Belts, strings or other drive systems can move the stages while a motor supplies the lifting force." },
      { title: "Controlling the movement", text: "Stable mounting, suitable tension and travel limits are important for safe operation. Position feedback helps a lift return to repeatable heights, and testing should account for the weight of the mechanism it carries." },
    ],
  },
  {
    slug: "autonomous", title: "Autonomous",
    summary: "Encoder and vision-based paths for consistent auto points.",
    intro: "During autonomous, the robot follows a programmed routine without live driver commands. Reliable movement and predictable timing make each action easier to repeat.",
    sections: [
      { title: "Knowing where the robot is", text: "Encoders and odometry can estimate movement and field position. Vision can add information about field markers or targets, helping the robot align before an action." },
      { title: "Building a repeatable routine", text: "A routine combines paths with actions such as collecting and scoring. Test each action separately, then run the full sequence from the same starting position and measure where it succeeds or drifts." },
    ],
  },
  {
    slug: "software", title: "Software",
    summary: "Java with the FTC SDK, tuned PID control and driver assists.",
    intro: "Robot software connects driver input, sensors and motors. It turns a mechanical design into coordinated movement during both autonomous and driver-controlled play.",
    sections: [
      { title: "Organizing robot controls", text: "The FTC SDK provides the tools for writing Java robot programs. Separating drivetrain, intake and other mechanism controls makes it easier to test changes without disrupting the whole robot." },
      { title: "Feedback and consistency", text: "PID control compares a target with a measured value and adjusts motor output to reduce the difference. Careful tuning and useful telemetry help programmers understand what the robot is doing and improve repeatability." },
    ],
  },
  {
    slug: "design", title: "Design",
    summary: "Fully modeled in CAD before a single part is cut.",
    intro: "Design connects the game challenge to a robot that can actually be built. CAD makes it possible to explore layouts, check clearances and communicate ideas before manufacturing parts.",
    sections: [
      { title: "From idea to assembly", text: "A model brings the drivetrain, mechanisms and mounting points together. Constrained sketches and parametric dimensions make revisions easier when a part or layout needs to change." },
      { title: "Designing for the workshop", text: "Check fastener access, moving-part clearance and space for wiring as well as the mechanism itself. A manufacturable design should also allow repairs and part replacement between matches." },
    ],
  },
] as const;

export function findRobotDetail(slug: string) {
  return robotDetails.find((detail) => detail.slug === slug);
}