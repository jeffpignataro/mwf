<?php

/**
 *
 *
 * @package decorator
 * @subpackage site_decorator
 *
 * @author ebollens
 * @copyright Copyright (c) 2010-11 UC Regents
 * @license http://mwf.ucla.edu/license
 * @version 20120409
 *
 * @uses Decorator
 * @uses Tag_HTML_Decorator
 */

require_once(dirname(dirname(dirname(__FILE__))).'/decorator.class.php');
require_once(dirname(dirname(__FILE__)).'/html/tag.class.php');

class Content_Site_Decorator extends Tag_HTML_Decorator
{
    private $_padded = true;

    public function __construct($inner = array(), $params = array())
    {
        parent::__construct('div', $inner, $params);
        $this->add_class('content');
    }

    public function set_padded($val = true)
    {
        $this->_padded = $val ? true : false;
        return $this;
    }
    
    public function set_not_padded($val = true){
        return $this->set_padded(!$val);
    }

    public function add_header($inner, $params = array())
    {
        return $this->add_inner_tag('h2', $inner, $params);
    }

    public function add_header_light($inner, $params = array())
    {
        if(!isset($params['class']))
            $params['class'] = 'light';
        elseif(!in_array('light', explode(' ', $params['class'])))
            $params['class'] .= ' light';

        return $this->add_header($inner, $params);
    }

    public function add_subheader($inner, $params = array())
    {
        return $this->add_inner_tag('h4', $inner, $params);
    }

    public function add_paragraph($inner, $params = array())
    {
        return $this->add_inner_tag('p', $inner, $params);
    }

    public function add_section($inner, $params = array())
    {
        return $this->add_inner_tag('div', $inner, $params);
    }

    public function render($raw = false)
    {
        if(!$this->_padded)
            $this->add_class('not-padded');

        return parent::render($raw);
    }
}
