<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class PermissionModel extends BaseModel {

	public $table = "permissions";

	public function __construct() {
		parent::__construct();
	}
}
