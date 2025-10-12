import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiExpress,
  SiMongodb,
  SiRedux,
  SiMongoose,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <div className="md:hidden">
        <div className="divider"></div>
        <h2 className="text-2xl font-medium text-center mb-4">
          Familiar Tech:
        </h2>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-8 md:p-3">
        {/* JavaScript */}
        <div className="border place-items-center p-3 shadow rounded-lg hover:bg-yellow-400 hover:scale-105 duration-500">
          <IoLogoJavascript className="text-4xl md:text-5xl" />
          <h2 className="text-base font-semibold text-gray-700">JavaScript</h2>
        </div>

        {/* TypeScript */}
        <div className="border place-items-center p-3 shadow rounded-lg hover:bg-blue-200 hover:scale-105 duration-500">
          <SiTypescript className="text-blue-500 text-4xl md:text-5xl" />
          <h2 className="text-base font-semibold text-gray-700">TypeScript</h2>
        </div>

        {/* React */}
        <div className="border place-items-center p-3 shadow rounded-lg hover:shadow-lg hover:scale-105 duration-500">
          <FaReact className="text-blue-400 text-4xl md:text-5xl" />
          <h2 className="text-base font-semibold text-gray-700">React.js</h2>
        </div>

        {/* Redux */}
        <div className="border place-items-center p-3 shadow rounded-lg hover:bg-purple-200 hover:scale-105 duration-500">
          <SiRedux className="text-purple-500 text-4xl md:text-5xl" />
          <h2 className="text-base font-semibold text-gray-700">Redux</h2>
        </div>

        {/* Node.js */}
        <div className="border place-items-center p-3 shadow rounded-lg hover:bg-green-300 hover:scale-105 duration-500">
          <FaNodeJs className="text-green-500 text-4xl md:text-5xl" />
          <h2 className="text-base font-semibold text-gray-700">Node.js</h2>
        </div>

        {/* Express.js */}
        <div className="border place-items-center p-3 shadow rounded-lg hover:bg-gray-100 hover:scale-105 duration-500">
          <SiExpress className="text-gray-600 text-4xl md:text-5xl" />
          <h2 className="text-base font-semibold text-gray-700">Express.js</h2>
        </div>

        {/* MongoDB */}
        <div className="border place-items-center p-3 shadow rounded-lg hover:bg-green-200 hover:scale-105 duration-500">
          <SiMongodb className="text-green-600 text-4xl md:text-5xl" />
          <h2 className="text-base font-semibold text-gray-700">MongoDB</h2>
        </div>

        {/* Mongoose */}
        <div className="border place-items-center p-3 shadow rounded-lg hover:bg-red-100 hover:scale-105 duration-500">
          <SiMongoose className="text-red-600 text-4xl md:text-5xl" />
          <h2 className="text-base font-semibold text-gray-700">Mongoose</h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
