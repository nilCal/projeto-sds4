const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>23</td>
                        <td>1517.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Joe</td>
                        <td>45</td>
                        <td>25</td>
                        <td>35017.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Mary</td>
                        <td>56</td>
                        <td>67</td>
                        <td>18017.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>CJ</td>
                        <td>35</td>
                        <td>67</td>
                        <td>15717.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Travis</td>
                        <td>67</td>
                        <td>34</td>
                        <td>16017.00</td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}

export default DataTable;