import './Right.css'
import Navbar from "../Navbar/Navbar";

export default function Right({ children }) {

    return (
        <section className="right">

            <div className="bw1">
                <h1 className="hg1">Treki</h1>

                <div className="zag"></div>

                <p className="p_z1 x1">#</p>
                <p className="p_z1 x2">Название</p>
                <p className="p_z1 x3">Альбом</p>
                <p className="p_z1 x4">Время</p>
            </div>

            <div className="bw2">
                {children}
            </div>

            <div className="bw3">
                <Navbar />
            </div>

        </section>
    )
}