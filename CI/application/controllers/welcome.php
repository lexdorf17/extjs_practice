<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$this->load->view('welcome_message');
	}


	public function records()
    {
        //Get Data From Request
        $start  =   ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit  =   ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 50);

        //Running Queries
        $query  = $this->db->limit($limit, $start)->get('test')->result();
        $total  = $this->db->select('a')->get('test')->num_rows();

        //Fecthing Data
        $data   = array();
        foreach($query as $result){
            $data[] = $result;
        }

        //Print Data
        $json   = array(
            'success'   => TRUE,
            'total'     => $total,
            'data'      => $data
        );
        echo json_encode($json);
    }

    public function add()
    {
        //Get Data From Submit Form
        $data   = json_decode($this->input->post('data',TRUE));
        $data   =   array(
                    'a'     => $data->a,
                    'b'   => strtoupper($data->b)
                );

        $this->db->insert('test', $data);
        $last   = $this->db->limit(1,0)->order_by('a', 'DESC')->get('test')->row();
        $total  = $this->db->select('a')->get('test')->num_rows();

        //Send Respone
        $json   = array(
            'success'   => TRUE,
            'total'     => $total,
            'data'      => $last
        );

        echo json_encode($json);
    }

public function edit(){
	//Get Data From Submit Form
        $data   = json_decode($this->input->post('data',TRUE));
        $data   =   array(
                    'a'     => $data->a,
                    'b'   => strtoupper($data->b)
                );

        //Last Data
	$this->db->where('a', $data['a'])->update('test', $data);
      	$last   = $data;
        $total  = $this->db->select('a')->get('test')->num_rows();

        //Send Respone
        $json   = array(
            'success'   => TRUE,
            'total'     => $total,
            'data'      => $last
        );

        echo json_encode($json);
}

    public function delete()
    {
        //Get Data From Submit Form
        $data   = json_decode($this->input->post('data',TRUE));
        $data   =   array(
                    'a'     => $data->a,
                    'b'   => strtoupper($data->b)
                );

        //Initialize
        $last       = $data;
        $success    = FALSE;

        $this->db->where('a', $data['a'])->delete('test', $data);
        $last       = $this->db->limit(1,0)->order_by('a', 'DESC')->get('test')->row();
       	$message    = $data['b'].' berhasil dihapus';
       	$success    = TRUE;
        $total  = $this->db->select('a')->get('test')->num_rows();

        //Send Respone
        $json   = array(
            'success'   => $success,
            'total'     => $total,
            'data'      => $last,
            'message'   => $message
        );

        echo json_encode($json);
    }

    public function getList()
    {
        //Running Queries
        $query  = $this->db->get('test')->result();

        //Fecthing Data
        $data   = array();
        foreach($query as $result){
            $data[] = $result;
        }

        //Print Data
        $json   = array(
            'success'   => TRUE,
            'data'      => $data
        );
        echo json_encode($json);
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */