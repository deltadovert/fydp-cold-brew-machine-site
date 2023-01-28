import { sharedStyles } from './shared-styles';
import Spacer from './spacer';

const Blog = () => {
  return (
    <div
      style={{
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={sharedStyles.header}>Our Blog</div>

      <Spacer height={50} />
      <div style={{ width: '80%', textAlign: 'left', border: '10px solid purple', padding: 20 }}>
        <h3>Reflection - January 27th</h3>
        <div>
        In anticipation of demonstrating the coffee maker's core functionality,
        we have determined 4 separate proof of concepts that will function
        independently by mid February. The 4 subsystems that we will be
        fabricating and verifying are as follows:
        </div>
        <ol>
          <li>
            <h4>Pressing assembly </h4>This assembly will be a machine capable
            of pressing French press through water with grounds using a lead
            screw assembly. This will demonstrate that the selected motor and
            lead screw will provide enough torque for our project. It will also
            determine whether the alignment of the press with the carafe will be
            as trivial as expected. Necessary parts:
            <ul>
              <li>Gears (3D printed)</li>
              <li>Frame (Flat aluminum bars)</li>
              <li>Motor</li>
              <li>Lead Screw and Nut</li>
              <li>Arduino</li>
            </ul>
          </li>
          <li>
            <h4>Water depletion detection</h4> This assembly will simply consist
            of a container of water with the water detector submerged in it.
            This assembly will demonstrate that the water depletion
            functionality will work. Necessary parts:
            <ul>
              <li>Water container</li>
              <li>Water sensor</li>
              <li>Arduino</li>
            </ul>
          </li>
          <li>
            <h4>Ground depletion detection</h4>This assembly will consist of a
            container of coffee grounds with the photointerruptor positioned in
            the grounds. This assembly will demonstrate that the grounds
            depletion functionality will work. Necessary parts:
            <ul>
              <li>Ground container</li>
              <li>Photointerruptor</li>
              <li>Arduino</li>
            </ul>
          </li>
          <li>
            <h4>Scheduling server</h4>This system will be a proof of concept for the
            scheduling server. This system will consist of a barebones React
            Native app that can access the backend API to request a brew. The
            server will process this and send the necessary messages to the
            Arduino, which will indicate successful brew start and finish with
            lights flashing. The process will be run with a shorter brew time to
            let it be demoed on a short timeline. In the past week, all
            necessary electronics and hardware have arrived and designs have
            been adjusted for these proof of concept systems. The python server
            and React app have been set up, and work has started on integrating
            the endpoints.
          </li>
        </ol>
        The most complex subsystem will be the pressing assembly, and that will
        be our focus for the two weeks. The other subsystems will be quite
        simple to assemble.
      </div>
    </div>
  );
};

const style = {
  title: {
    color: 'black',
    fontSize: 20,
  },
};

export default Blog;
