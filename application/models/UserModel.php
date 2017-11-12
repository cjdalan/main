<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class UserModel extends BaseModel {

	public $id;
	public $first_name;
	public $last_name;
	public $username;
	public $password;
	public $role;

	protected $table = "users";

	public function __construct() {
		parent::__construct();
	}

	public function authenticate_user($email_address, $password) {
		$user = $this->db->get_where('users', ['email_address' => $email_address])->row();

		if ($user && $this->encryption->decrypt($user->password) === $password) {
			unset($user->password);
			$this->session->set_userdata("user", $user);
			return true;
		}
		
		return false;
	}

	public function current_user() {
		$user = $this->session->userdata("user");

		if ($user) {
			$user->permissions = [];
			foreach ($this->role_permission->get_by_role($user->role) as $permission) {
				$user->permissions[] = $permission["permission_id"];
			}
		}

		return $user;
	}
}
