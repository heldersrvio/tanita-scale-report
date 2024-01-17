const Report = (props) => {
    return (
        <div>
            <h1>Composição Corporal por Bioimpedância</h1>

            <div class="report">
                <div class="report-header">
                    <div class="report-column">
                        <div>
                            <span><strong>Nome:</strong></span>
                            <span class="data">{props.data.patient_name}</span>
                        </div>
                        <div>
                            <span><strong>Data:</strong></span>
                            <span class="data">{props.data.report_date}</span>
                        </div>
                    </div>
                    <div class="report-column">
                        <div>
                            <span><strong>Sexo:</strong></span>
                            <span class="data">{props.data.sex === 'M' ? 'Masculino' : 'Feminino'}</span>
                        </div>
                        <div>
                            <span><strong>Altura:</strong></span>
                            <span class="data"></span>
                        </div>
                    </div>
                </div>
                <div class="report-main">
                    <div class="report-table" id="body-composition-table">
                        <h2>Composição Corporal</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Valor</th>
                                    <th>Faixa Normal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Peso</td>
                                    <td>{props.data.weight} kg</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Percentual de Líquido</td>
                                    <td>{props.data.water_mass_pct}%</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Massa Magra</td>
                                    <td>{props.data.muscular_mass} kg</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Massa Óssea</td>
                                    <td>{props.data.bone_mass}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Taxa Metabólica</td>
                                    <td>{props.data.basal_metabolic_rate} kcal</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="report-chart" id="muscle-mass-chart">
                        <h3>Massa magra segmentar</h3>
                        <div class="chart-container">
                            <div class="chart">
                                <div class="chart-quadrant">
                                    <span>{props.data.left_arm_muscular_mass} kg</span>
                                </div>
                                <div class="chart-quadrant">
                                    <span>{props.data.right_arm_muscular_mass} kg</span>
                                </div>
                                <div class="chart-quadrant">
                                    <span>{props.data.left_leg_muscular_mass} kg</span>
                                </div>
                                <div class="chart-quadrant">
                                    <span>{props.data.right_leg_muscular_mass} kg</span>
                                </div>
                            </div>
                            <div class="human">
                                <span class="body-data-label">Tronco</span>
                                <span class="body-data">{props.data.trunk_muscular_mass} kg</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="humanbody"><circle cx="256" cy="79.838" r="48" fill="#ffffff" class="color000000 svgShape"></circle><path d="M424 144H88c-13.255 0-24 10.745-24 24s10.745 24 24 24h98.451c5.579 1 13.197 3.837 17.216 14.252 4.651 12.056 2.37 33.606-.539 51.727l-3.775 21.395-.058.311-.004.02-30.375 172.268c-2.303 13.053 6.414 25.5 19.467 27.803 13.055 2.301 25.333-6.416 27.634-19.471L237 340.348v.167S243.25 308 255.452 308h1.096C269 308 275 340.515 275 340.515v-.083l20.983 119.913c2.301 13.055 14.663 21.749 27.718 19.448 13.053-2.303 21.728-14.762 19.425-27.814L312.73 279.703c-.002-.008-.013-.02-.015-.027-.019-.104-.044-.217-.063-.322l-3.777-21.414c-2.909-18.121-5.191-39.631-.541-51.688C312.354 195.838 319.97 193 325.549 192H424c13.255 0 24-10.745 24-24s-10.745-24-24-24z" fill="#ffffff" class="color000000 svgShape"></path></svg>
                            </div>
                            <span class="hand-indication">Direita</span>
                        </div>
                    </div>
                    <div class="report-table" id="fat-table">
                        <h2>Diagnóstico de Obesidade</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Valor</th>
                                    <th>Faixa Normal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Índice de Massa Corporal</td>
                                    <td>{props.data.bmi}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Percentual de Gordura Corporal</td>
                                    <td>{props.data.body_fat_pct}%</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Massa de Gordura</td>
                                    <td>{props.data.fat_mass} kg</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Gordura Visceral</td>
                                    <td>{props.data.visceral_fat_rate} %</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="report-chart" id="fat-chart">
                        <h3>Gordura segmentar</h3>
                        <div class="chart-container">
                            <div class="chart">
                                <div class="chart-quadrant">
                                    <span>{props.data.left_arm_fat_pct}%</span>
                                </div>
                                <div class="chart-quadrant">
                                    <span>{props.data.right_arm_fat_pct}%</span>
                                </div>
                                <div class="chart-quadrant">
                                    <span>{props.data.left_leg_fat_pct}%</span>
                                </div>
                                <div class="chart-quadrant">
                                    <span>{props.data.right_leg_fat_pct}%</span>
                                </div>
                            </div>
                            <div class="human">
                                <span class="body-data-label">Tronco</span>
                                <span class="body-data">{props.data.trunk_fat_pct}%</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="humanbody"><circle cx="256" cy="79.838" r="48" fill="#ffffff" class="color000000 svgShape"></circle><path d="M424 144H88c-13.255 0-24 10.745-24 24s10.745 24 24 24h98.451c5.579 1 13.197 3.837 17.216 14.252 4.651 12.056 2.37 33.606-.539 51.727l-3.775 21.395-.058.311-.004.02-30.375 172.268c-2.303 13.053 6.414 25.5 19.467 27.803 13.055 2.301 25.333-6.416 27.634-19.471L237 340.348v.167S243.25 308 255.452 308h1.096C269 308 275 340.515 275 340.515v-.083l20.983 119.913c2.301 13.055 14.663 21.749 27.718 19.448 13.053-2.303 21.728-14.762 19.425-27.814L312.73 279.703c-.002-.008-.013-.02-.015-.027-.019-.104-.044-.217-.063-.322l-3.777-21.414c-2.909-18.121-5.191-39.631-.541-51.688C312.354 195.838 319.97 193 325.549 192H424c13.255 0 24-10.745 24-24s-10.745-24-24-24z" fill="#ffffff" class="color000000 svgShape"></path></svg>
                            </div>
                            <span class="hand-indication">Direita</span>
                        </div>
                    </div>
                </div>
                <div class="muscle-fat-control">
                    <h2>Controle Músculo-Gordura</h2>
                    <div class="muscle-fat-control-table">
                        <div class="muscle-fat-control-column">
                            <div class="muscle-fat-control-item">
                                <span>Idade Metabólica</span>
                                <span>{props.data.metabolic_age} anos</span>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
            <div class="report-footer">
                <span><strong>Gessiane Sérvio</strong> - Nutricionista</span>
            </div>
        </div>
    )
};

export default Report;
